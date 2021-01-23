const mongoose = require('mongoose')
const citySchema = new mongoose.Schema({
    //un objeto que va a tener el molde del  model de mi city 
  ciudad:{type: String, required: true},
  url: {type: String, required: true},
  
})
//crear el modelo producto (indicamos el nombre de la collection y el schema)
const City =mongoose.model('city',citySchema)
//al modelo lo debemos exportar
module.exports = City