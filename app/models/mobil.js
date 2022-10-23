"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Mobil extends Model {
    static associate(models) {}
  }
  Mobil.init(
    {
      nama: DataTypes.STRING,
      sewaperhari: DataTypes.DECIMAL,
      ukuran: DataTypes.STRING,
      foto: DataTypes.STRING,
      createdBy: DataTypes.STRING,
      updatedBy: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Mobil",
    }
  );
  return Mobil;
};
