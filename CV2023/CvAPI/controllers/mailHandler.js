const { request, response } = require("express");
const nodemailer = require("nodemailer");

const sendMail = (req = request, resp = response) => {
  let body = req.body;
  let config = nodemailer.createTransport({
    host: "smtp.gamil.com",
    post: 587,
    auth: {
      user: "jorgedtoro@gmail.com",
      pass: "%c0k5#!080506",
    },
  });

  const options = {
    from: "Cv",
    subject: body.asunto,
    to: "jorgedtoro@gmail",
    text: body.message,
  };

  config.sendMail(options, function (error, result) {
    if (error) {
      return resp.json({
        ok: false,
        msg: result,
      });
    }
    return resp.json({
      ok: true,
      msg: result,
    });
  });
};

module.exports = { sendMail };
