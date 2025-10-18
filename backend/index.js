const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.listen(8080, async () => {
  console.log("server live");
});

app.post("/contact-me", async (req, res) => {
  const { email, name, msg } = req.body;
  console.log(req.body);
  const msg2 = {
    to: "ayantik.sarkar2020@gmail.com",
    from: "ayantik.sarkar2020@gmail.com", // must be a verified sender in SendGrid
    subject: "From Portfolio",
    html: `From: ${name} <br> Email: ${email} <br> Message: ${msg}`,
  };
  try {
    await sgMail.send(msg2);
    console.log("Email sent successfully!");
  } catch (err) {
    console.error(
      "Failed to send email",
      err.response ? err.response.body : err
    );
  }

  res.json({});
});
