const Itinerary = require('../models/Itinerary')
const Itineraries = require('../models/Itinerary')
const { addCity } = require('./citiesController')
const ItinerariesController ={
    addItinerary: async (req, res) =>{
        //addItinerary recibe por el body las propiedades y las destructuramos 
     const {title,userPic, userName,like, hours,price, hashtag,activities,comments, cityId}= req.body
     const agregarItinerary= new Itineraries({
         title, userPic, userName, like, hours, price, hashtag, activities, comments, cityId
     })
     
     agregarItinerary.save()
     .then(async itineraryGrabado=>{
         const itinerary= await itineraryGrabado.populate('cityId').execPopulate()
         return res.json({succes:true, respuesta: itinerary})
     })
     .catch(error =>{
         return res.json({success:false, respuesta:error})
     })

    },
    allItineraries: (req, res)=>{
        Itineraries.find()
        .then(data=>{
            return res.json({success: true, respuesta:data})
        })
        .catch(error=>{
            return res.json({success:false, respuesta:error})
        })
        
    },
    itinerariesForId: async (req, res)=>{
       const {id}=req.params
       const itinerarioCiudad= await Itinerary.find({cityId:id}).populate('cityId')
       .then(itinerarioCiudad =>{
           return res.json({success:true, respuesta: itinerarioCiudad})
       })
       .catch(error =>{
           return res.json({success:false, respuesta:error})
       })
       
    },
    commentsItineraries :  (req, res)=>{
       
        const {id}= req.body
        const {userName, comment, userPic}= req.body
        console.log(req.body)
        
          Itineraries.findOneAndUpdate({_id:id},
            { $push: {
                comments:{userName:userName, comment: comment, userPic:userPic}
            }
            }
        )
        .then( respuesta =>{
            return res.json({success:true, respuesta: respuesta})
        })
        .catch(error =>{return res.json({success: false, respuesta: error})})
         
    }

}

module.exports =ItinerariesController

