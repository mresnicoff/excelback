const asignarPermisos = async (req, res) => {
  const Permiso = require('../models/Permiso');
    const Usuario = require('../models/Usuario');
datos=req.body
console.log(datos)
 misPermisos=await Permiso.find({'id': {$all: datos.permisos}})
console.log(misPermisos)
await Usuario.updateMany({ 'email': datos.user }, { $push: { permisos: misPermisos } });

res.json({mensaje:"hola"});
}

module.exports = asignarPermisos