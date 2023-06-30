const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const permisoSchema = new Schema({

    id: { type: String, required: true},
    zona: { type: String, arequired: true},
    rol: { type: String, required: true},
    usuarios: [{ type: Schema.Types.ObjectId, ref: 'Usuario' }]
  });

  module.exports = mongoose.model('Permiso', permisoSchema);