const mongoose = require('mongoose')
const itinerarySchema = new mongoose.Schema({
    title: {type:String, required:true},
    userPic: {type:String, required:true},
    userName: {type: String, required: true},
    like: {type:Number, required:false, default:0},
    hours:{type:Number, required:true},
    price:{type:Number, required:true},
    hashtag:{type:Array},
    comments: [{userName:String, comment:String, userPic:String}],
    //exportamos el id de City 
    cityId: {type:mongoose.Schema.ObjectId, ref:'city'}
     
})

const Itinerary =mongoose.model('itinerary', itinerarySchema)
module.exports = Itinerary