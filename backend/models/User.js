const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userName: {type:String, required:true},
    password: {type:String, required:true},
    userPic:{
        type: String,
        required: false,
        default: function() {
          // Unimos nombre y apellido para que ui-avatars tome las dos iniciales
          const fullName = `${this.name} ${this.lastName}`;
          return `https://ui-avatars.com/api/?name=${encodeURIComponent(fullName)}&background=random&color=fff`;
        },
      },
    name: {type:String, required:true},
    lastName: {type:String, required:true}, 
    rol: {type:String, default:"noadmin", required:false},
    userPhone:{type:String, required:true},
})

const User = mongoose.model('user', userSchema)
module.exports = User