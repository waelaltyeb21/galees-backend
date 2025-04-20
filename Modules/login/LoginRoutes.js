const LoginRoutes = require("express").Router();
const { Login, Logout } = require("./loginController");

LoginRoutes.post("/logout", Logout);
LoginRoutes.post("/", Login);

module.exports = LoginRoutes;
