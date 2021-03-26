const Joi = require('joi')

const validator ={
  accountToValidate:  (req, res, next)=>{
      //las validaciones con joi (es antes de llegar al controlador)
    const schema  = Joi.object({
      userName: Joi.string().trim().required().email({tlds: { allow:false}}),
      userPic: Joi.string().uri(),
      password: Joi.string().trim().required().min(6),
      name: Joi.string().trim().required().max(10),
      lastName: Joi.string().trim().required().max(10)
    })
    //validamos los campos traidos del body 
    const validation =  schema.validate(req.body, {abortEarly: false})
    if(!validation.error){ 
      next()
    }else{
      //tratar el details en el front
      return res.json({success:false, response: validation.error })
    }
    
  }
}

module.exports = validator