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
       
        
          Itineraries.findOneAndUpdate({_id:id},
            { $push: {
                comments:{userName:userName, comment: comment, userPic:userPic}
            }
            },{new:true} //muestra la version actualizada o nueva 
        )
        .then( respuesta =>{
            return res.json({success:true, respuesta: respuesta})
        })
        .catch(error =>{return res.json({success: false, respuesta: error})})
         
    },
    deleteComment:(req,res)=>{
         const id= req.params.iditinerario
        const idComment = req.params.idcomment
    
        Itineraries.findByIdAndUpdate({_id: id},{
            $pull:{
                comments:{_id:idComment}
            }
        },{new:true})
        .then(respuesta=>{
            return res.json({success:true, response:respuesta, message:"delete comment"})
            
        })
        .catch(error=>{
            return res.json({success:false, response:error})
        })
    },
    editComment:(req, res)=>{
       
        const id= req.params.iditinerario
        const idComment=req.params.idcomment
        const editedComment = req.body.editedComment
       Itineraries.findOneAndUpdate({_id:id,'comments._id':idComment},
       { $set: {'comments.$.comment':editedComment}},{new:true})
        .then( response => {

            res.json({success:true,message:'Comment edited',response})})

        .catch(error => res.json({success:false,error}))
    },
    valorattion:(req, res)=>{
       
        const id= req.params.iditinerario
        const valor=req.body
        console.log(req.params.iditinerario, req.body)
       Itineraries.findOneAndUpdate({_id:id},
       { $set: like=valor},{new:true})
        .then( response => {

            res.json({success:true,message:'success valoration',response})})

        .catch(error => res.json({success:false,error}))
    }
    

}

module.exports =ItinerariesController

