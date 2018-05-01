
var express = require('express');
var passport = require('passport');
var User = require('../models/users');
var router = express.Router();

router.get('/register', function(req, res) {
    res.render('register', { title: 'Sal\'s Pizza v4-twig' });
});

router.post('/register', function(req, res) {
    User.register({ username : req.body.username }, req.body.password, function(err, user) {
        if (err) {
            return res.render('register', { title: 'Sal\'s Pizza v4-twig', user : user });
        }

        passport.authenticate('local')(req, res, function () {
            res.redirect('/');
        });
    });
});

router.get('/login', function(req, res) {
    res.render('login', { title: 'Sal\'s Pizza v4-twig', user : req.user });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

module.exports = router;