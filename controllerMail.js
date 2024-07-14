let nodemailer = require('nodemailer');


function emailHTML(input_text) {
    return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <style>
      body {
        background-color: blanchedalmond;
      }
      h1 {
        color: green;
      }
      p {
        color: blueviolet;
      }
    </style>
    <body>
      <h1>SomeTitle</h1>
      <p>some text send to user</p>
      <p>${input_text}</p>
    </body>
  </html>`;
};


const sendMailFn = async (_email, _subject, _text) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.MY_MAIL,
            pass: process.env.MY_MAIL_PASSWORD,
        }
    });

    const mailOptions = {
        from: {
            name: 'Classmatedata',
            address: process.env.MY_MAIL
        },
        to: [_email],
        subject: _subject,
        html: emailHTML(_text),
    };


    try {
        console.log("my email details:", process.env.MY_MAIL, process.env.MY_MAIL_PASSWORD);
        console.log('Sending email to:', _email);
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        return info;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }

}

const sendMail = async (req, res) => {

    try {
        console.log('In sendMail function');
        const { email, subject, text } = req.body;
        console.log('Email details:', email, subject, text);

        await sendMailFn(email, subject, text);
        return res.status(200).json({ 'status': 'email send' });

    } catch (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ 'status': 'error', 'message': error.message });
    }

}

module.exports = {
    sendMail,
}