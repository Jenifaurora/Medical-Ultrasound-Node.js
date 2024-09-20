const express = require('express');
const multer = require('multer');
const Ultrasound = require('../models/Ultrasound');
const Patient = require('../models/Patient');
const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// Create a new ultrasound record
router.post('/', upload.single('image'), async (req, res) => {
  const ultrasound = new Ultrasound({
    patientId: req.body.patientId,
    image: req.file.path,
    notes: req.body.notes
  });

  await ultrasound.save();

  // Update patient's ultrasound records
  await Patient.findByIdAndUpdate(req.body.patientId, {
    $push: { ultrasoundRecords: ultrasound._id }
  });

  res.status(201).send(ultrasound);
});

// Get all ultrasound records for a patient
router.get('/:patientId', async (req, res) => {
  const ultrasounds = await Ultrasound.find({ patientId: req.params.patientId });
  res.send(ultrasounds);
});

module.exports = router;
