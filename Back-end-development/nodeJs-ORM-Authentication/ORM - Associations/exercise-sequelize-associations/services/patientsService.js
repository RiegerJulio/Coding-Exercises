const { Patient, Plan, Surgery } = require('../models');

const getAllPatients = async () => {
  try {
    const patients = await Patient.findAll({
      include:
        {
          model: Plan,
          as: 'plan',
        },
    });
    return patients;
  } catch (error) {
    throw error;
  }
}

const getPatientsSurgeries = async () => {
  try {
    const patients = await Patient.findAll({
      include:
        {
          model: Surgery,
          as: 'surgeries',
          through: {
            attributes: [],
        },
      },
    });
    return patients;
  } catch (error) {
    throw error;
  }
}

const createPatient = async ({fullname, plan_id}) => {
  try {
    const newPatient = await Patient.create({ fullname, plan_id });
    return newPatient;
  } catch (error) {
    throw error;
  }
}

const getPatientsAndSurgeriesWithoutDoctor = async () => {
  try {
    const patients = Patient.findAll({
      include: {
        model: Surgery,
        as: 'surgeries',
        attributes: { exclude: ['doctor'] },
        through: { attributes: [] }
      }
    })
    return patients;
  } catch (error) {
    throw error;
  }
}

module.exports = { getAllPatients, getPatientsSurgeries, createPatient, getPatientsAndSurgeriesWithoutDoctor };