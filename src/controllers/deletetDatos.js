const Consumo = require('../models/Consumo');
const deleteDatos = async (req, res) => {

const zona=req.query.zona



    misConsumos = await Consumo.deleteMany( {zona:zona});


    res.json(misConsumos);
  } 

module.exports = deleteDatos;