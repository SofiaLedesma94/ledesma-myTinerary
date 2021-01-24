
const City = require ('../models/City')


const citiesController={
    addCity:async (req,res)=>{
        //agregamos ciudades (capturar info, grabarlo en bd, respuesta al frontend )
        const agregarCity = new City({
            ciudad: req.body.ciudad,
            url: req.body.url
        })
         agregarCity.save() 
         .then (cityGrabada => {
             return res.json({success: true, respuesta: cityGrabada})
         } )
         .catch(error => {
             return res.json({success:false, respuesta: error})
         })
    },
    
    allCities: (req,res)=>{
        //devolvemos las ciudades al frontend
       City.find()
       .then(data=>{
           return res.json({success: true, respuesta:data})
       })
       .catch(error=>{
           return res.json({success:false, respuesta:error})
       })
     },
     oneCitie: (req,res)=>{
         //devuelve una ciudad por id 
        const id= req.params.id
         City.findById(id)
         .then(info=>{
             return res.json({success:true, respuesta:info})
         })
         .catch(error=>{
             return res.json({success:true, respuesta:error})
         })
        }
       
}

module.exports = citiesController