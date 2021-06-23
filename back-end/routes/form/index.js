const express = require("express");
const router = express.Router();
const nodeOutlook = require('nodejs-nodemailer-outlook')

router.post("/", (req, res) => {
    nodeOutlook.sendEmail({
        auth: {
            user: "management@digitalbyte.io",
            pass: "Zxg-4988Zxg-4988"
        },
        from: 'management@digitalbyte.io',
        to: 'management@digitalbyte.io',
        subject: '[PORTFOLIO CONTACT FORM]',
        html: `
        <div style="display: flex;flex-direction: row;">
            <h1>Portfolio Submission</h1>
            <p>First Name: ${req.body.formInfo.fname}</p>
            <p>Last Name: ${req.body.formInfo.lname}</p>
            <p>Email: ${req.body.formInfo.email}</p>
            <p>Company: ${req.body.formInfo.company}</p>
            <p>Message: ${req.body.formInfo.message}</p>
        </div>
        `,
        text: '',
        replyTo: 'management@digitalbyte.io',
        attachments: [
                            {
                                filename: 'text1.txt',
                                content: 'hello world!'
                            }
                        ],
        onError: (e) => console.log(e),
        onSuccess: (i) => res.send({success: true})
    }
    
    
    );
});

module.exports = router;