var express = require('express'),
    path = require('path'),
    nodeMailer = require('nodemailer'),
    bodyParser = require('body-parser');

    var app = express();
    var port = 3000;

    app.set('view engine', 'ejs');
    app.use(express.static(path.join(__dirname, '/public/')));

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    
    app.get('/',function(req,res){
        res.render('index');
    });

    app.post('/send-email',function(req,res){
        let transporter = nodeMailer.createTransport({
            host: 'mail.dipeshraichana.com',
            port: 465,
            secure: true,
            auth: {
                user: 'innocentdevil@dipeshraichana.com',
                pass: 'dipsi@6003'
            },
            tls: {
                rejectUnauthorized: false
            }
        });
        console.log(req.body)
        let recepientMailOptions = {
            from: '"Dipesh Raichana" <innocentdevil@dipeshraichana.com>',
            to: req.body.email,
            subject: "Project Inquiry", // Subject line
            text: req.body.message, // plain text body
            html: '<h2>Hello '+req.body.uname+'</h2><p>Thanks for contacting.</p><p>I will get back to you in 48 hrs.</p><p>Have a nice day</p>' // html body
        }
        transporter.sendMail(recepientMailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message %s sent: %s', info.messageId, info.response);
            res.redirect('/');
        });
        let adminMailOptions = {
            from:  req.body.uname + '<' + req.body.email +'>',
            to: 'dipesh.raichana@gmail.com',
            subject: "Project Inquiry", // Subject line
            text: req.body.message, // plain text body
            html: '<h2>Hello Dipesh </h2><b>You have new Project Inquiry</b> Phone Number: '+ req.body.phone// html body
        }
        transporter.sendMail(adminMailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Admin Message %s sent: %s', info.messageId, info.response);
            res.redirect('/');
        });
    });

    app.listen(port, function(req,res){
        console.log('server is running at port: ',port);
    });