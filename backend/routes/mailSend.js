import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();


// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465, // Use 465 for SSL
    secure: true, // Use true for 465, false for 587
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  
console.log(transporter);
// Route for sending emails
router.post('/send-mail', (req, res) => {
  const { email,name,subject,message } = req.body;
console.log(email,name,subject,message);


if (!email || !name || !subject || !message) {
    return res.status(400).send('All fields are required.');
  }

  const mailOptions = {
    from: `${name} ${email}>`,
    to: process.env.EMAIL_USER,
    replyTo:email,
    subject: subject,
    text: message,
  };

  console.log(mailOptions);

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
      return res.status(500).send('Error sending email.');
    }
    console.log(error);
    return res.status(200).send('Email sent successfully!');
  });
});

export default router;
