const mongoose = require('mongoose')
const itinerarySchema = new mongoose.Schema({
    title: {type:String, required:true},
    userPic: {type:String, required:false},
    userName: {type: String, required: false},
    like: {type:Number, required:false, default:0},
    hours:{type:Number, required:true},
    price:{type:Number, required:true},
    hashtag:{type:Array, required:false},
    comments: [{userName:String, comment:String, userPic:String}],
    activities: [{activityImage:String, activityTitle:String,}],
    //exportamos el id de City 
    cityId: {type:mongoose.Schema.ObjectId, ref:'city'}
     
})

const Itinerary =mongoose.model('itinerary', itinerarySchema)
module.exports = Itinerary