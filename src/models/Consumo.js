const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const consumoSchema = new Schema({
  // defino el modelo

    matriculas: { type: String, required: true},
    mes: { type: String, required: true },
    cantidades: { type: Number, required:true },
    zona: { type: String, required: true },
  });


module.exports = mongoose.model('Consumo', consumoSchema);