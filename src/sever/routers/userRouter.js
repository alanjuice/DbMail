const express = require("express");

const { userRegister, userLogin } = require("../controllers/userAccount")

const app = express.Router();

//Routers related to user account
app.post("/register", userRegister);
app.post("/login", userLogin);

module.exports = app;