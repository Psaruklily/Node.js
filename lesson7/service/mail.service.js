const mailer = require('nodemailer');
const EmailTemplates = require('email-templates');
const templatesInfo = require('../email-templates');
const { ROOT_EMAIL, ROOT_EMAIL_PASSWORD } = require('../configs/config');
const path = require('path');

console.log(ROOT_EMAIL)
console.log(ROOT_EMAIL_PASSWORD)

const templateParser = new EmailTemplates({
    views: {
        root: path.join(process.cwd(), 'email-templates')
    }
})

const transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
        user: ROOT_EMAIL,
        pass: ROOT_EMAIL_PASSWORD
    }
});

const sendMail = async(userMail, action, context) => {
    try {
        const templateInfo = templatesInfo[action];

        if (!templateInfo) {
            throw new Error('Wrong mail action');
        }

        const html = await templateParser.render(templateInfo.templateName, context);

        return transporter.sendMail({
            from: ROOT_EMAIL,
            to: userMail,
            subject: templateInfo.subject,
            html
        });
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    sendMail
};