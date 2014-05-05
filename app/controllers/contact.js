var nodemailer = require("nodemailer");


module.exports = {

  sendMessage: function(req, res) {
    console.log(req.body);

    //Cache message parameters
    var fromName = req.body.name;
    var fromEmail = req.body.email;
    var subject = req.body.subject;
    var messageBody = req.body.message;

    //Set Nodemailer transport service
    var transport = nodemailer.createTransport("SMTP", {
      service: "Mandrill",
      auth: {
          user: process.env.MANDRILL_USER,
          pass: process.env.MANDRILL_PASS
      }
    });

    // Set e-mail data
    var mailOptions = {
      from: fromName + " <"+fromEmail+">", // sender address
      to: "patrick@fairusetube.org", // list of receivers
      subject: subject, // Subject line
      text: messageBody, // plaintext body
      html: "<p>"+messageBody+"</p>" // html body
    };

    // send mail with defined transport object
    transport.sendMail(mailOptions, function(error, response){
      if(error){
        console.log(error);
        res.send(500);
      } else {
        console.log("Message sent: " + response.message);
        res.send(200);
      }
    });
  }

};