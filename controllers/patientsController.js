const Patient = require('../models/Patient');
const url = require('url');

exports.homePage = (req, res) => {
    res.render('index', { title: 'Home', user: req.user });
  };

  exports.getPatients = (req, res) => {
    Patient.find((err, patients) => {
      if (err) {
        res.render('error');
      } else {
        res.render('patients', {
          title: 'All Patients',
          patients,
          user: req.user,
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
          user: req.user,
        });
      }
    });
  };


  exports.addPatient = (req, res) => {
    res.render('addPatient', {
      title: 'Add Patient',
      user: req.user,
    });
  };
  
  exports.createPatient = (req, res) => {
    try {
      const patient = new Patient(req.body);
      patient.save();
      res.redirect('/patients');
    } catch (err) {
      console.log(err);
    }
  };

  exports.editPatient = (req, res) => {
    // use Game model to find selected document
    Patient.findById({ _id: req.params.id }, (err, patient) => {
      if (err) {
        console.log(err);
      } else {
        res.render('editPatient', {
          title: 'Edit',
          patient,
          isActive: 'doctor',
          user: req.user,
        });
      }
    });
  };
  
  exports.updatePatient = (req, res) => {
    
  
    Patient.update({ _id: req.params.id }, req.body, (err) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect('/doctor');
      }
    });
  };

  exports.deletePatient = (req, res) => {
    Patient.findByIdAndRemove(
      { _id: req.params.id },
      async (err, patientJustDeleted) => {
        if (err) {
          console.log(err);
        } else {
          res.redirect('/doctor');
        }
      },
    );
  };
  
 
  
  