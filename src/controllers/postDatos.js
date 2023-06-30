const Consumo = require('../models/Consumo');
const postDatos = async (req, res) => {

  // const  cargar=req.body
  console.log(req.body)

await Consumo.create(req.body);
    res.json(req.body);
  } 

module.exports = postDatos;
