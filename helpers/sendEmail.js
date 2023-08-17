const formData = require("form-data");
const Mailgun = require("mailgun.js");
const mailgun = new Mailgun(formData);
require("dotenv").config();

const { MAILGUN_API_KEY } = process.env;

const sendEmail = async (data) => {
  const mg = mailgun.client({
    username: "podoliak.a.s@gmail.com",
    key: MAILGUN_API_KEY,
  });

  mg.messages
    .create("sandbox8db1ca7c998b4f1a8c6714ba423b471d.mailgun.org", {
      from: "Mailgun Sandbox <podoliak.a.s@gmail.com>",
      to: [data.to],
      subject: "Verify your email",
      text: "Verify your email",
      html: data.html,
    })
    .then((msg) => console.log(msg))
    .catch((err) => console.log(err));
};

module.exports = sendEmail;
