const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Transport Configuration
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT, // 587 or 465
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    // auth: {
    //     user: process.env.SMTP_USER,
    //     pass: process.env.SMTP_PASS
    // }
});

// Verify connection configuration
transporter.verify(function (error, success) {
    if (error) {
        console.log("SMTP Connection Error:", error);
    } else {
        console.log("Server is ready to take our messages");
    }
});

// Send Email Route
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: `"${name}" <${process.env.EMAIL_FROM}>`, // sender address
        to: process.env.EMAIL_TO, // list of receivers
        replyTo: email, // Set Reply-To to the user's email
        subject: `New Contact Form Inquiry from ${name}`, // Subject line
        html: `
            <h3>New Inquiry from Saravana Overseas Website</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <blockquote style="background: #f9f9f9; padding: 15px; border-left: 5px solid #1976d2;">
                ${message.replace(/\n/g, '<br>')}
            </blockquote>
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Error sending email:", error);
            return res.status(500).json({ success: false, message: 'Failed to send email', error: error.message });
        }
        console.log('Message sent: %s', info.messageId);
        res.status(200).json({ success: true, message: 'Email sent successfully!' });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
