

// import express, cors and nodemailer 
const express = require('express');
const router = express.Router();
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const { google } = require('googleapis');
const OAuth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URI,
);
OAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });
const accessToken = OAuth2Client.getAccessToken();

// create a new express application
const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(5001, () => console.log('Server Running'));

// Nodemailer Configuration
const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: process.env.EMAIL_USER,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: accessToken,
    },
});

// Verify the connection configuration
contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Ready to Send');
    }
})

/// Route to send emails
router.post('/contact', (req, res) => {
    const { firstName, lastName, email, phone, message } = req.body;
    const mail = {
        from: `${firstName} ${lastName}`,
        to: "willa2024test@gmail.com",
        subject: "Contact Form Submission - From Willa Portfolio Application",
        html: `<p>Name: ${firstName} ${lastName}</p>
               <p>Email: ${email}</p>
               <p>Phone: ${phone}</p>
               <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json({ status: 'ERROR' });
        } else {
            res.json({ status: 'Message Sent' });
        }
    });
});