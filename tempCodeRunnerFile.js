const { MailtrapClient } = require("mailtrap");

const TOKEN = "4a68b14a027a7586494b53d63ddb6e92";
const ENDPOINT = "https://send.api.mailtrap.io/";

const client = new MailtrapClient({ endpoint: ENDPOINT, token: TOKEN });

const sender = {
  email: "mailtrap@niftyleveltracker.in",
  name: "Mailtrap Test",
};
const recipients = [
  {
    email: "sddeveloper96@gmail.com",
  }
];

client
  .send({
    from: sender,
    to: recipients,
    subject: "You are awesome!",
    text: "Congrats for sending test email with Mailtrap!",
    category: "Integration Test",
  })
  .then(console.log, console.error);