const nodemailer = require("nodemailer");
require("dotenv").config();

const sendMail = (req) => {
  let body = req.body;
  console.log(body);
  let config = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });
  console.log("pass: " + process.env.PASS);
  const options = {
    from: body.email,
    to: "jorgedtoro@gmail",
    subject: body.name,
    text: body.comments,
  };

  config.sendMail(options, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
  return body;
};

module.exports = { sendMail };
