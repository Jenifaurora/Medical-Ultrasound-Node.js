const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
  name: String,
  dateOfBirth: Date,
  medicalRecordNumber: String,
  ultrasoundRecords: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ultrasound' }]
});

module.exports = mongoose.model('Patient', PatientSchema);
