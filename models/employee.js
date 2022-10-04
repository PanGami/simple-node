'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // https://sequelize.org/docs/v6/core-concepts/assocs/
      // The A.hasOne(B) association means that a One-To-One relationship exists between A and B, 
      // with the foreign key being defined in the target model (B).
      this.hasOne(models.User, {
        foreignKey: "id",
        targetKey: "email", 
      });
    }
  }
  employee.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    organization: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'employee',
  });
  return employee;
};