var express = require("express");
var router = express.Router();
var { check } = require("express-validator");
const { login, logout, register } = require("../controllers/auth");

// AUTH ROUTES
router.post(
  "/register",
  [
    check("fname", "first name must be of 3 characters").isLength({
      min: 3,
    }),
    check("email", "email is required").isEmail(),
    check("password", "password must be of 3 characters").isLength({
      min: 3,
    }),
  ],
  register
);

router.post(
  "/login",
  [
    check("email", "email is required").isEmail(),
    check("password", "password field is required").isLength({ min: 1 }),
  ],
  login
);
router.post("/logout", logout);

module.exports = router;
