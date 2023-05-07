var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  }
});


const sendEmail = async (to, subject, text) =>{
        try {
            var mailOptions = {
                from: 'youremail@gmail.com',
                to: to,
                subject: subject,
                text: text
              };
              
              await transporter.sendMail(mailOptions);
        } catch (error) {
            console.log("error", error);
        }
    
}

module.exports = sendEmail