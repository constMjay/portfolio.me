const sendEmail = require('../utils/sendEmail');
const formValidation = require('../utils/validation');

const homeRoutes = (req, res) => {
    res.render('index');
}
const aboutRoutes = (req, res) => {
    res.render('about');
}
const contactRoutes = (req, res) => {
    res.render('contact');
}
const projectRoutes = (req, res) => {
    res.render('project');
}

/**
 * Send Email
 */
const sendEmailRoutes = (req, res) => {
    const { fullname, email } = req.body;
    const to = email;
    const from = process.env.EMAIL_SENDER;
    const subject = "Let's Make a Website For Your Bussiness.";

    const output =
        `
    <h1>Hello ${fullname},</h1>
    <p>I am Arjay Marquez a web developer aspiring to be a full-stack developer and still at my college taking of Bachelor Science in Information Technology and Education.</p>
    <p>I live in Quezon Province, Philippines and i'm also a freelancer so if you've a bussiness we could talk about making a website for you.</p>

    <strong>You can contact me:</strong>
    <ul style="list-style-type:none;">
        <li>
        https://www.facebook.com/inaod23/
        </li>
        <li>
        https://twitter.com/ArjayMarquez6
        </li>
        <li>
        09303278451(TNT)
        </li>
    </ul>
    `;
    try {
        // Validate Form From the client
        const { error } = formValidation(req.body);
        if (error) return res.send(error.details[0])

        // Send Email
        sendEmail(to, from, subject, output)
        res.status(200).send({ message: "Message was sent." })
    } catch (error) {
        console.log("Sending message error occured:", error)
        res.status(400).send({ message: error })
    }

}
module.exports = {
    homeRoutes,
    aboutRoutes,
    contactRoutes,
    projectRoutes,
    sendEmailRoutes
}