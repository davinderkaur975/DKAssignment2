const Patient = require('../models/Patient');

exports.homePage = (req, res) => {
    res.render('index', { title: 'Home' });
  };

  exports.getPatients = (req, res) => {
    Patient.find((err, patients) => {
      if (err) {
        res.render('error');
      } else {
        res.render('patients', {
          title: 'All Patients',
          patients,
        });
      }
    });
  };

  exports.doctor = (req, res) => {
    Patient.find((err, patients) => {
      if (err) {
        res.render('error');
      } else {
        res.render('doctor', {
          title: 'Patient',
          isActive: 'doctor',
          patients,
        });
      }
    });
  };


  exports.addPatient = (req, res) => {
    res.render('addPatient', {
      title: 'Add Patient',
    });
  };
  
  exports.createPatient = (req, res) => {
    try {
      const patient = new Patient(req.body);
      patient.save();
      res.redirect('/doctor');
    } catch (err) {
      console.log(err);
    }
  };
  
 
  
  