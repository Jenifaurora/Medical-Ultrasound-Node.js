const mongoose = require('mongoose');

const UltrasoundSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
  image: String,
  date: { type: Date, default: Date.now },
  notes: String
});

module.exports = mongoose.model('Ultrasound', UltrasoundSchema);
