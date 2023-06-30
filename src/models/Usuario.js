const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const usuarioSchema = new Schema({

    Nombre: { type: String, required: true},
    email: { type: String, required: true, },
    passwordhasheada: { type: String,required: true},
    permisos: [{ type: Schema.Types.ObjectId, ref: 'Permiso' }]
  });

  module.exports = mongoose.model('Usuario', usuarioSchema);