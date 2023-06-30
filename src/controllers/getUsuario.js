const Usuario = require('../models/Usuario');
const getUsuario = async (req, res) => {

  const  datos=req.query

  const user = await Usuario.find({  email: datos.email  });
  console.log(user)
    res.json(user[0]);
  } 

module.exports = getUsuario;
