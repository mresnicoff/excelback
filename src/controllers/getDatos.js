const Consumo = require('../models/Consumo');
const getDatos = async (req, res) => {

const zona=req.query.zona
console.log(req.query)
var misConsumos
if (zona){
    misConsumos = await Consumo.find({zona:zona});}

    res.json(misConsumos);
  } 

module.exports = getDatos;
