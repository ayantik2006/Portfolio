const express = require("express");
const cors = require("cors");
const sgMail = require("@sendgrid/mail");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.listen(8080, () => {
  console.log("server live");
});

app.post("/contact-me", (req, res) => {
  const { email, name, msg } = req.body;
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const mesg = {
    to: "ayantik.sarkar",
    from: process.env.SENDER_EMAIL, // must be a verified sender in SendGrid
    subject: "Forgot Password",
  };
  res.json({});
});
