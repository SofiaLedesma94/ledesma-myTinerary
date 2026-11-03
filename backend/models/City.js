const mongoose = require('mongoose')
const citySchema = new mongoose.Schema({
    //un objeto que va a tener el molde del  model de mi city 
  cityName:{type: String, required: true},
  cityCountryName:{type: String, required: true},
  url: {type: String, required: true},
  cityCountItineraries: {type: Number, required: false, default: 0},
})
//crear el modelo producto (indicamos el nombre de la collection y el schema)
const City =mongoose.model('city',citySchema)
//al modelo lo debemos exportar
module.exports = City