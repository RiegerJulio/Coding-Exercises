const patientsService = require('../services/patientsService');

const getAllPatients = async (req, res) => {
  try {
    const patients = await patientsService.getAllPatients();
    res.status(200).json(patients);
    if (!patients) {
      res.status(404).json({ message: 'No patients found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const getPatientsSurgeries = async (req, res) => {
  try {
    const patients = await patientsService.getPatientsSurgeries();
    res.status(200).json(patients);
    if (!patients || patients.length === 0) {
      res.status(404).json({ message: 'No patients found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const createPatient = async (req, res) => {
  try {
    const { fullname, plan_id } = req.body;
    const patient = await patientsService.createPatient({ fullname, plan_id });
    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const getPatientsAndSurgeriesWithoutDoctor = async (req, res) => {
  try {
    const patients = await patientsService.getPatientsAndSurgeriesWithoutDoctor();
    res.status(200).json(patients);
    if (!patients) {
      res.status(404).json({ message: 'No patients found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { getAllPatients, getPatientsSurgeries, createPatient, getPatientsAndSurgeriesWithoutDoctor };