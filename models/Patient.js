const mongoose = require('mongoose');

// define a schema for the game model
// this and all other models inherit from mongoose.Schema

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