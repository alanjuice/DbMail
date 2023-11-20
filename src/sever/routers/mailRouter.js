const express = require("express");
const { getMails, sendMail } = require("../controllers/mails");

const authorize = require("../middleware/authenticate");


const router = express.Router();

//Routers related to mails
router.get("/getmails", authorize, getMails);
router.post("/sendMail", authorize, sendMail);

module.exports = router;