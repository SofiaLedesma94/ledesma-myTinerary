const passport = require('passport')
const jwtStrategy = require('passport-jwt').Strategy
const extractJww = require('passport-jwt').ExtractJwt
const user = require ('../models/User')
 
//controla nuestro token 
module.exports = passport.use( new jwtStrategy({
    //toma dos parametros (donde lo saca y como interpretarlo)
    jwtFromRequest: extractJww.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.secret_word
}, (payload, done)=>{
    //realizamos la busqueda 
    user.findById(payload._doc._id)
    //si se cumple la promesa devuelve un usuario
    .then(user =>{
        if(!user){
            //analiza si tiene error y si tiene un usuario
           return  done(null, false )
        }else{
           return  done(null, user)
        }
    })
    .catch(error=>{
        return done(error, false)
    })
}))