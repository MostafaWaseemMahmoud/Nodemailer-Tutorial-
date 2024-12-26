const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "mostafawaseem22@gmail.com",  // Your Gmail address
    pass: "twap hqpb rbrj bcdp",  // Your Gmail app-specific password
  },
});

const sendEmail = (toEmail, subject, message) => {
  const mailOptions = {
    from: "mostafawaseem22@gmail.com",  // Your Gmail address
    to: toEmail,                   // Recipient's email address
    subject: subject,              // Subject of the email
    text: message,                 // Email body text
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log('Error:', err);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};

// Example usage
const userEmail = "amanynaeem68@gmail.com";  // Replace with the recipient's email
const subject = "Test Email";
const message = "Hello! This is a test notification from Mostafa Waseem Applicatoin.";

sendEmail(userEmail, subject, message);
