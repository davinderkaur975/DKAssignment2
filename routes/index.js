var express = require('express');
const patientController = require('../controllers/patientsController');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const passport = require('passport');



var router = express.Router();


/* GET home page. */
router.get('/', patientController.homePage);

router.get('/patients', patientController.getPatients);

router.get('/doctor', authController.isLoggedIn, patientController.doctor);
router.get('/doctor/edit/:id', patientController.editPatient);
router.post('/doctor/edit/:id', patientController.updatePatient);
router.get('/doctor/delete/:id', patientController.deletePatient);

router.get('/add', authController.isLoggedIn, patientController.addPatient);
router.post('/add', authController.isLoggedIn, patientController.createPatient);

router.get('/register', userController.registerForm);
router.post('/register', userController.register, authController.login);

router.get('/login', userController.loginForm);
router.post('/login', authController.login);

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/patients');
});

router.get('/google', authController.googlePre);
router.get('/google/callback', authController.googlePost);


router.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: [
        'https://www.googleapis.com/auth/plus.login',
        ,
        'https://www.googleapis.com/auth/plus.profile.emails.read'
      ]
    })
  );
  
  router.get(
    '/auth/google/callback',
    passport.authenticate('google', {
      successRedirect: '/auth/google/success',
      failureRedirect: '/auth/google/failure'
    })
  );

module.exports = router;
