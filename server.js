const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
// const sgMail = require('@sendgrid/mail');
const port = 3001;
const app = express();
// sgMail.setApiKey('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');
dotenv.config();

// const msg = {
//     to: "arjayd231@gmail.com",
//     from: "arjay6021@gmail.com",
//     subject: "Let's make something for your bussiness.",
//     text: "Hello i am Arjay Marquez i am a web developer."
// };
// sgMail.send(msg, function (err, info) {
//     if (err) {
//         console.log("Email not sent.")
//     } else {
//         console.log("Email was sent.")
//     }
// })
/**
 * Import Routes
 */
const portfolioRoutes = require('./backend/routes/portfolio.routes');
/**
 * Middleware
 */
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
/**
 * Set Up View Engine
 */
app.set('views', path.join(__dirname, 'frontend/public/views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'frontend/public')))

/**
 * Routes
 */
app.use(portfolioRoutes)
app.listen(port, (req, res) => {
    console.log(`Listening on port: ${port}`)
})