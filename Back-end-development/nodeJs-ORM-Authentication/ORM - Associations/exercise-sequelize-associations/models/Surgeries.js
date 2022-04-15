const Surgeries = (sequelize, DataTypes) => {
  const Surgeries = sequelize.define('Surgeries', {
    surgery_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    speciality: DataTypes.STRING, allowNull: false,
    doctor: DataTypes.STRING, allowNull: false,
  }, {
    timestamps: false,
  });
  return Surgeries;
};

module.exports = Surgeries;
