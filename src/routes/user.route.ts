import express, { Express, Request, Response } from "express";
import { authenticateUser } from "../middlewares/authenticate";
import { createAccountHandler } from "../handlers/user/createAccount.handler";
import { loginUserHandler } from "../handlers/user/loginUser.handler";
import { logOutUserHandler } from "../handlers/user/logoutUser.handler";
import { sendVerificationEmail } from "../middlewares/sendVerificationEmail.middleware";
import { verifyUserEmailHandler } from "../handlers/user/verifyUserEmail.handler";
import { loginUsingToken } from "../handlers/user/loginusingToken";

const User = require("../models/user.model");
const userRoute = express.Router();

//create user
userRoute.post(
    "/user/create-account",
    createAccountHandler
);

//login user
userRoute.post("/user/login", authenticateUser, loginUserHandler);

//login user by jwt token
userRoute.get("/user/login/token", loginUsingToken);

//logout user
userRoute.get("/user/logout", logOutUserHandler);

//verify user email
userRoute.get("/user/verify-email", verifyUserEmailHandler);

module.exports = userRoute;
