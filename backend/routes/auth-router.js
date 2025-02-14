const express = require("express");
const  routerLogin = express.Router();
const { handleAuth,handleRegister,handleLogin ,handleUser} = require("../controllers/auth-controller");
const validate = require("../middlewares/validate-middleware");
const  {signUpSchema,loginSchema}  = require("../validators/auth-validator");
const authMiddleware = require("../middlewares/auth-middleware");

routerLogin.route("/").get(handleAuth);

routerLogin.route("/register").post(validate(signUpSchema), handleRegister);

routerLogin.route("/login").post(validate(loginSchema),handleLogin);

routerLogin.route("/user").get(authMiddleware,handleUser);

module.exports = routerLogin; 
