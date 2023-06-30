const Permiso = require('../models/Permiso');
const postPermisos = async (req, res) => {

const many=[{"id":"RMC","zona":"Río","rol":"Rio Mantenimiento carga"},
{"id":"GMC","zona":"General Paz","rol":"GP Mantenimiento Carga"},
{"id":"LMC","zona":"Lomas de Zamora","rol":"LZ Mantenimiento Carga"},
{"id":"AMC","zona":"Avellaneda Quilmes","rol":"AQ Mantenimiento Carga"},
{"id":"RMA","zona":"Río","rol":"Rio Mantenimiento aprobación"},
{"id":"GMA","zona":"General Paz","rol":"Gp Mantenimiento Aprobación"},
{"id":"LMA","zona":"Lomas de Zamora","rol":"LZ Mantenimiento aprobación"},
{"id":"AMA","zona":"Avellaneda Quilmes","rol":"AQ Mantenimiento Aprobación"},
{"id":"ROC","zona":"Río","rol":"Rio Obras carga"},
{"id":"GOC","zona":"General Paz","rol":"GP Obras Carga"},
{"id":"LOC","zona":"Lomas de Zamora","rol":"LZ Obras Carga"},
{"id":"AOC","zona":"Avellaneda Quilmes","rol":"AQ Obras Carga"},
{"id":"ROA","zona":"Río","rol":"Rio Obras aprobación"},
{"id":"GOA","zona":"General Paz","rol":"Gp Obras Aprobación"},
{"id":"LOA","zona":"Lomas de Zamora","rol":"LZ Obras aprobación"},
{"id":"AOA","zona":"Avellaneda Quilmes","rol":"AQ Obras Aprobación"},
{"id":"TMC","zona":"Alta Tensión","rol":"AT Mantenimiento Carga"},
{"id":"TMA","zona":"Alta Tensión","rol":"AT Mantenimiento Aprobación"},
{"id":"TOC","zona":"Alta Tensión","rol":"AT Obras Carga"},
{"id":"TOA","zona":"Alta Tensión","rol":"AT Obras Aprobación"},
{"id":"TAC","zona":"Transformadores","rol":"Transformadores Carga"},
{"id":"TAA","zona":"Transformadores","rol":"Transformadores Aprobación"},
{"id":"LOG","zona":"Logística","rol":"Logística"}
]


await Permiso.insertMany(many);
    res.json(req.body);
  } 

module.exports = postPermisos;