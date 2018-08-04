/* File name: patientsController.js
     Author's name: Davinder Kaur
     Website name: https://dkassignment2.herokuapp.com/
     File Description: This file is rendering the view of all the pages. */

const Patient = require('../models/Patient');
const url = require('url');

//It is rendering the view of homepage.
exports.homePage = (req, res) => {
    res.render('index', { title: 'Home', user: req.user });
  };

  //It is rendering the view of patients page.
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


//It is rendering the view of doctor page.
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

//It is rendering the view of add new patient to the table page.
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

  //It is rendering the view of edit page.
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

  //It is rendering the view of delete.
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
  
 
  
  