const { string } = require('joi')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userName: String,
    password: String,
    userPic:String,
    name: String,
    lastName: String, 
    rol: {type:String, default:"noadmin"}
})

const User = mongoose.model('user', userSchema)
module.exports = User