const Plans = (sequelize, DataTypes) => {
  const Plans = sequelize.define('Plans', {
    plan_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    coverage: DataTypes.STRING, allowNull: false,
    price: DataTypes.DOUBLE, allowNull: false,
  }, {
    timestamps: false,
  });
  Plans.associate = (models) => {
    Plans.hasMany(models.Patients, { foreignKey: 'plan_id', as: 'patients' });
  };
  return Plans;
};

module.exports = Plans;