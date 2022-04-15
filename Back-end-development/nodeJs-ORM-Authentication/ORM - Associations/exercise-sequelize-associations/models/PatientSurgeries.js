const PatientSurgeries = (sequelize, DataTypes) => {
  const PatientSurgeries = sequelize.define('PatientSurgeries',
  {},
  {
    timestamps: false,
  });
  PatientSurgeries.associate = (models) => {
    models.Surgeries.belongsToMany(models.Patients, {
      through: PatientSurgeries,
      foreignKey: 'surgery_id',
      as: 'patients',
      otherKey: 'patient_id'
    });
    models.Patients.belongsToMany(models.Surgeries, {
      through: PatientSurgeries,
      foreignKey: 'patient_id',
      as: 'surgeries',
      otherKey: 'surgery_id'
    });
  };
  return PatientSurgeries;
};