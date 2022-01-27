var mongoose = require("mongoose");
const { v1: uuidv1 } = require("uuid");
var crypto = require("crypto");
var userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      max_length: 32,
      trim: true,
    },
    lastName: {
      type: String,
      max_length: 32,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: Number,
      max_length: 15,
    },
    salt: {
      type: String,
    },
    encry_password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema
  .virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = uuidv1();
    this.encry_password = this.securePassword(password);
  })
  .get(function () {
    return this._password;
  });

userSchema.methods = {
  authenticate: function () {
    return this.securePassword(plainpassword) === this.encry_password;
  },
  securePassword: function (plainpassword) {
    if (!plainpassword) return "";
    try {
      return crypto
        .createHmac("sha256", this.salt)
        .update(plainpassword)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },
};

module.exports = mongoose.model("User", userSchema);
