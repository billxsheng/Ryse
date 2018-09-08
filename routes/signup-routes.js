const router = require('express').Router();
const passport = require('passport');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const User = require('../model/user-recruiter.model');
var localStrategy = require('passport-local').Strategy;
var mongoose1 = require('../db/mongoose');
const bcrypt = require('bcrypt');

router.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/recruiter', (req, res) => {
    res.render('signup_recruiter');
});

router.get('/seeker', (req, res) => {
    res.render('signup_employee');
});

router.get('/endorser', (req, res) => {
    res.render('signup_support');
});

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

router.post('/submit/endorser', urlencodedParser, (req, res) => {
    console.log(req.body);
});

router.post('/submit/seeker', urlencodedParser, (req, res) => {
    console.log(req.body);
});

router.post('/submit/recruiter', urlencodedParser, (req, res) => {
    console.log(req.body);
    //var user = new User();

    // bcrypt.genSalt(10, (err, salt) => {
    //     console.log('gensalt', salt);
    //     bcrypt.hash(user.password, salt, (err, hash) => {
    //         user.password = hash;
    //         console.log('after', user);
    //         user.save().then(() => {
    //             res.render('login');
    //         });
    //         // var transporter = nodemailer.createTransport({
    //         //     service: 'gmail',
    //         //     auth: {
    //         //       user: 'billxsheng@gmail.com',
    //         //       pass: ''
    //         //     }
    //         //   });
    //         //   var mailOptions = {
    //         //     from: 'youremail@gmail.com',
    //         //     to: user.email,
    //         //     subject: 'Sending Email using Node.js',
    //         //     text: 'ezpz'
    //         //   };
    //     });
    // });
}); 

//google callback route
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.redirect('/profile');
});

//auth with google
router.get('/google', passport.authenticate("google", {
    scope: ['profile']
}), (req, res) => {
    //handle with passport
    res.send('logging in with google');
});


module.exports = router;