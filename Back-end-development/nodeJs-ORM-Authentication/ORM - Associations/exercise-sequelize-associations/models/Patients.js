const Patients = (sequelize, DataTypes) => {
  const Patients = sequelize.define('Patients', {
    patient_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    full_name: DataTypes.STRING, allowNull: false,
    plan_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true
    },
  }, {
    timestamps: false,
  });
  Patients.associate = (models) => {
    Patients.belongsTo(models.Plans, { foreignKey: 'plan_id', as: 'plan' });
  };
  return Patients;
};

module.exports = Patients;