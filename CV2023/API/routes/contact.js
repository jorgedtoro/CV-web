const express = require("express");
const router = express.Router();
const { sendMail } = require("../models/mail");

//POST http://localhost:3000/contact
router.post("/", async (req, res) => {
  try {
    const formData = await sendMail(req);
    const result = res.json(formData);
    console.log(result);
  } catch (error) {
    res.json({
      error: error.message,
    });
  }
});

module.exports = router;
