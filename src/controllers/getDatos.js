const { Consumo, } = require("../db.js");
const getDatos = async (req, res) => {

const zona=req.query.zona
console.log(req.query)
var misConsumos
if (zona){
    misConsumos = await Consumo.findAll({where:{zona:zona}});}

    res.json(misConsumos);
  } 

module.exports = getDatos;
