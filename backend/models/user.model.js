const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, "First name must have be at least 3 characters long"],
    },
    lastname: {
      type: String,
      minlength: [3, "Last name must be atleast 3 char"],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: [5, "email length must be atleast of 5 char"],
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  socketIdd: {
    type: String,
  },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "24",
  });
  return token;
};
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
