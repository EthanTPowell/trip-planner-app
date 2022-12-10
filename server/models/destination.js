'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Destination extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Destination.belongsTo(models.Trip, {
        foreignKey: 'tripID',
        onDelete: 'CASCADE'
    });
    }
  }
  Destination.init({
    tripID: DataTypes.INTEGER,
    name: DataTypes.STRING,
    dayCode: DataTypes.INTEGER,
    notes: DataTypes.STRING,
    // lat: DataTypes.INTEGER,
    // lng: DataTypes.INTEGER,
    phone: DataTypes.STRING,
    url: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Destination',
  });
  return Destination;
};