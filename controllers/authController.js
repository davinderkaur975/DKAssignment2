/* File name: authController.js
     Author's name: Davinder Kaur
     Website name: https://dkassignment2.herokuapp.com/
     File Description: This file is for authenticating the users */

const passport = require('passport');
const mongoose = require('mongoose');

const User = mongoose.model('User');

exports.isLoggedIn = (req, res, next) => {
  // first check if user is authenticated
  if (req.isAuthenticated()) {
    next();
    return;
  }
  res.redirect('/login');
};

// if login is success then takes to the doctor page otherwise redirect to login page
exports.login = passport.authenticate('local', {
  successRedirect: '/doctor',
  failureRedirect: '/login',
  failureMessage: 'Invalid Login',
});


exports.googlePre = passport.authenticate('google', {
  scope: [
    'https://www.googleapis.com/auth/plus.login',
    'https://www.googleapis.com/auth/plus.profile.emails.read'
  ]
});

exports.googlePost = passport.authenticate('google', {
  successRedirect: '/doctor',
  failureRedirect: '/login'
});