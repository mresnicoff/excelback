const Usuario = require('../models/Usuario');
const bcrypt = require("bcrypt")
const handleUsuarios = async (req, res) => {
if(req.method==="POST"){
  try {
    async function hashPassword(plaintextPassword) {
      const hash = await bcrypt.hash(plaintextPassword, 10);
  return hash}
  const  cargar=req.body
  console.log(cargar)
  const emailRegistrado = await Usuario.find({ email: cargar.email  });
if (emailRegistrado.length === 0) {
  const cargaCorregida={}
  cargaCorregida.Nombre=cargar.nombre
  cargaCorregida.passwordhasheada=await hashPassword(cargar.password)
  cargaCorregida.email=cargar.email
  await Usuario.create(cargaCorregida);
      res.json(req.body);
  
} else {
  console.log(emailRegistrado)
  res.status(422).json({message:"El email ya está registrado"});
}
  }
  catch (error) {
    res.status(500).json({ message: errorresponse.data.message });
  }
}
else{
  if(req.method==="GET"){
    try{  
      const  datos=req.query
  if(datos.email && datos.password){


      const user = await Usuario.find( { email: datos.email } ).populate("permisos");
console.log(user[0].passwordhasheada)
    if (user !== null) {
      if (await bcrypt.compare(datos.password, user[0].passwordhasheada))
      {
      res.json(user[0]);}
      
      
      
      
      else{

        res.status(422).json({message:"La clave no coincide"});
      }
    }
    else{        res.status(422).json({message:"Usuario no registrado"});}}


  else{
    const misUsuarios = await Usuario.find();
    res.json(misUsuarios);
  }
  }


  catch (error) {
    res.status(500).json({ message: error.message });
  }
}}
}


module.exports = handleUsuarios;
