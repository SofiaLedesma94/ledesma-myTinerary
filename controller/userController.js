const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userController ={
    signup: async (req, res)=>{
        var errores=[]
        const {userName, password, userPic, uName,lastName, rol } = req. body
        
    //validamos usuario unico 
    const existingUser= await User.findOne({userName:userName})
     if(existingUser){
        errores.push('existing user, choose another')
     } 
     if(errores.length === 0){
          //hasheamos el password antes de guardarlo en la bd
         const passHasheado= bcrypt.hashSync(password,10)
         const userValidado=new User({
         userName ,password:passHasheado,userPic,uName,lastName
     })
         var usuarioValidado= await userValidado.save()   
        // generamos el toke 
        var token = jwt.sign({...usuarioValidado}, process.env.secret_word, {} )
        console.log(token)
     }
     return res.json({success:errores.length ===0 ? true : false,
                      respuesta: errores,
                      response:token})
                     },

    signin: async (req, res)=>{
        //capturamos username y pass desde el body
        const {userName, password} = req.body
        //validamos si existe el usuario
        const usuarioExistente = await User.findOne({userName:userName})
        if(!usuarioExistente){
            return res.json({success:false, respuesta:'wrong username or password'})
        }
        //validamos si la contraseña existe 
        const passExistente=bcrypt.compareSync(password,usuarioExistente.password)
        if(!passExistente){
            return res.json({success:false, respuesta: 'wrong username or password'})
        }
        var token =jwt.sign({...usuarioExistente},process.env.secret_word,{})
        return res.json({success: true, respuesta:{ token,userPic: usuarioExistente.userPic, uName:usuarioExistente.uName}})

    }
}


module.exports= userController