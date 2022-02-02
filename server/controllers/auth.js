const User = require("../models/user");
const { check, validationResult } = require("express-validator");
const jwt = require("express-jwt");

// REGISTER FUNCTION
exports.register = (req, res) => {
  var errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }
  var user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json("USER NOT SAVED IN DB");
    }
    return res.json(user);
  });
};

// LOGIN FUNCTION
exports.login = (req, res) => {
  let errors = validationResult(req);
  let { email, password } = req.body;
  if (!errors.isEmpty())
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  User.findOne({ email }, (err, user) => {
    if (err) return res.status(400).json("USER DOES NOT EXIST");
    if (!user.authenticate(password))
      return res.status(300).json("WRONG PASSWORD");

    // CREATE JWT TOKEN FOR SIGNIN
    const token = jwt.sign({ _id: user._id }, process.env.SECRET);

    // PUT TOKEN IN COOKIE
    res.cookie("token", token, { expire: new Date() + 9999 });

    // SEND RESPONSE TO FRONTEND
    const { _id, name, email } = user;
    return res.json({ token, user: { _id, email, name } });
  });
};

// LOGOUT FUNCTION
exports.logout = (req, res) => {
  res.clearCookie("token");
  res.json({
    message: "USER SIGNOUT SUCCESSFULLY",
  });
};

// PROTECTED ROUTES
exports.isSignedIn = expressJwt({
  secret: process.env.SECRET,
  userProperty: "auth",
});

// CUSTOM MIDDLEWARES
exports.isAuthenticated = (req, res, next) => {
  let checker = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!checker) {
    return res.status(403).json({
      error: "ACCESS DENIED",
    });
  }
  next();
};
