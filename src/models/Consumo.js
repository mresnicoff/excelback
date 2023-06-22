const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("consumo", {
    matriculas: { type: DataTypes.STRING, allowNull: false},
    mes: { type: DataTypes.STRING, allowNull: false },
    cantidades: { type: DataTypes.INTEGER },
    zona: { type: DataTypes.STRING, allowNull: false },
  });
};

