import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const { name, email, subject, message } = req.body;

  let config = {
    host: process.env.MAILER_HOST,
    port: process.env.MAILER_PORT,
    secure: process.env.MAILER_SECURE === "true" ? true : false,
    auth: {
      user: process.env.MAILER_USER,
      pass: process.env.MAILER_PASS,
    },
  };
  const transporter = nodemailer.createTransport(config);

  try {
    const emailRes = await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_TO,
      subject: subject,
      html: `<p>You Have An Contact Form Submission From <strong>${name}</strong></p><br />
        <p><strong>from :</strong> ${email}</p><br />
        <p><strong>subject :</strong> ${subject}</p><br />
        <p><strong>message :</strong> ${message}</p><br />
        `,
    });
    console.log("Message Sent", emailRes.messageId);
    res.status(200).json(req.body);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
}
