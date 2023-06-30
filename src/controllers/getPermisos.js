const Permiso= require('../models/Permiso');

const getPermisos = async (req, res) => {
try{
  const  datos=req.query
if(datos.length){
  const miPermiso=Permiso.find({  id: datos.id  });
if (miPermiso){
  res.json(miPermiso)
}
}
else{
    const misPermisos = await Permiso.find()
    console.log(typeof misPermisos)
    res.json(misPermisos);
}} 
catch (error){
  res.status(500).json({ message: "Hola" });
}
} 

module.exports = getPermisos;
