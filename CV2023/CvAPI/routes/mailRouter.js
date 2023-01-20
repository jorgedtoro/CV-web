const express = require("express");
const router = express.Router;

const express = require("express");

const nodemailer = require("nodemailer");

let envio = require("../controllers/mailHandler");

router.post("/contact", envio.sendMail);

module.exports = app;
