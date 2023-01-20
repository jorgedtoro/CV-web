const nodemailer = require("nodemailer");

const sendMail = (req) => {
  let body = req.body;
  console.log(body);
  let config = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "jorgedtoro@gmail.com",
      pass: "%c0k5#!080506",
    },
  });

  const options = {
    from: "Angular Cv",
    to: "jorgedtoro@gmail",
    subject: body.name,
    text: body.comments,
  };

  //   config.verify(function (error, success) {
  //     if (error) {
  //       console.log(error);
  //     } else {
  //       console.log("The service is ready");
  //     }
  //   });
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
