const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// POST endpoint to handle form submission
app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;
    
    // Create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'victorcodes9532@gmail.com',  // Your Gmail address
            pass: 'victory1234.'         // Your Gmail password (consider using environment variables for security)
        }
    });
    
    // Email message options
    let mailOptions = {
        from: 'your-email@gmail.com',
        to: 'destination-email@example.com',  // Destination email address where you want to receive the message
        subject: 'New Message from Contact Form',
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    };
    
    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('Error: Unable to send email.');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Email sent successfully!');
        }
    });
});

// Start server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
