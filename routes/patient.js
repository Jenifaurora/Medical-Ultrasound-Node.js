const express = require('express');
const Patient = require('../models/Patient');
const router = express.Router();

// Create a new patient
router.post('/', async (req, res) => {
  const patient = new Patient(req.body);
  await patient.save();
  res.status(201).send(patient);
});

// Get all patients
router.get('/', async (req, res) => {
  const patients = await Patient.find();
  res.send(patients);
});

module.exports = router;
