/* File name: Patient.js
     Author's name: Davinder Kaur
     Website name: https://dkassignment2.herokuapp.com/
     File Description: This file is defines schema for patient model. */

const mongoose = require('mongoose');


const patientSchema = new mongoose.Schema({
  doctorn: {
    type: String,
    required: 'Please enter doctor name',
  },
  patientn: {
    type: String,
    required: 'Please enter patient name',
  },
  age: {
    type: Number,
    required: 'Please enter Patient age',
  },
  disease: {
    type: String,
    required: 'Please enter Patient disease',
  },
});

module.exports = mongoose.model('Patient', patientSchema);