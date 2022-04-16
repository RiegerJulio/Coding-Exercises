const PatientSurgery = (sequelize, DataTypes) => {
  const PatientSurgery = sequelize.define('PatientSurgery',
  {},
  {
    timestamps: false,
    tableName: 'Patient_surgeries',
  });
  
  PatientSurgery.associate = (models) => {
    models.Surgery.belongsToMany(models.Patient, {
      through: models.PatientSurgery,
      foreignKey: 'surgery_id',
      as: 'patients',
      otherKey: 'patient_id'
    });
    models.Patient.belongsToMany(models.Surgery, {
      through: models.PatientSurgery,
      foreignKey: 'patient_id',
      as: 'surgeries',
      otherKey: 'surgery_id'
    });
  };
  return PatientSurgery;
};

module.exports = PatientSurgery;