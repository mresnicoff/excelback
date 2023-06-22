const { Consumo, } = require("../db.js");
const postDatos = async (req, res) => {

  const  cargar=req.body
  console.log(req.body)

await Consumo.bulkCreate(req.body);
    res.json(req.body);
  } 

module.exports = postDatos;
