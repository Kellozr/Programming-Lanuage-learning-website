const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Nodemailer setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'codewiz147gmail.com', // Your email
        pass: 'KUSHALparam' // Your email password
    }
});

// Signup endpoint
app.post('/signup', (req, res) => {
    const { fullname, email, password } = req.body;

    // You can add user saving logic here (e.g., to a database)

    const mailOptions = {
        from: 'codewiz147gmail.com',
        to: email,
        subject: 'Welcome to Code Wiz!',
        text: Hello ${fullname},\n\nThank you for signing up!
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Error sending email: ' + error.toString());
        }
        res.status(200).send('Sign up successful. Check your email for confirmation!');
    });
});

// Start server
app.listen(PORT, () => {
    console.log(listening);
});