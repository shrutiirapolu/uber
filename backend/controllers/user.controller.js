// first will go to routers if any erros ocur go to controler and if no erro save data go to services
const { validationResult } = require("express-validator");
const userModel = require("../models/user.model");
const userService = require("../services/user.services");
module.exports.registerUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  console.log(req.body);
  const { fullname, email, password } = req.body;
  const hashPassword = await userModel.hashPassword(password);
  const user = await userService.createUser({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashPassword,
  });
  const token = user.generateAuthToken();
  res.status(201).json({ token, user });
};
