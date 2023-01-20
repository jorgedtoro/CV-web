const nodemailer = require("nodemailer");
require("dotenv").config();

module.exports = (formulario) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: `"${formulario.nombre}" <${formulario.email}>`,
    to: process.env.USER,
    subject: formulario.asunto,
    html: `
    <strong>Nombre:<strong> ${formulario.nombre} <br/>
    <strong>Email:<strong> ${formulario.email} <br/>
    <strong>Mensaje:<strong> ${formulario.mensaje}
    `,
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};
