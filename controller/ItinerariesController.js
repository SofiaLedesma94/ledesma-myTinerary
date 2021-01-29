const Itineraries = require('../models/Itinerary')
const ItinerariesController ={
    addItinerary: async (req, res) =>{
        //addItinerary recibe por el body las propiedades y las destructuramos 
     const {title,userPic, userName,like, hours,price, hashtag,activities,comments, cityId}= req.body
     const agregarItinerary= new Itineraries({
         title, userPic, userName, like, hours, price, hashtag, activities, comments, cityId
     })
     agregarItinerary.save()
     .then(async itineraryGrabado=>{
         const itinerary= await (await Itineraries.findById(itineraryGrabado._id)).populate('cityId')
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
        
    }

}

module.exports =ItinerariesController