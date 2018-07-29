var express = require('express');
const patientController = require('../controllers/patientsController');
const userController = require('../controllers/userController');



var router = express.Router();


/* GET home page. */
router.get('/', patientController.homePage);

router.get('/doctor', patientController.doctor);

router.get('/register', userController.registerForm);
router.post('/register', userController.register);


module.exports = router;
