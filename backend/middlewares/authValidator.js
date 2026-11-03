const Joi = require('joi')

const fieldMessages = {
  'any.required': '{#label} is required',
  'string.base': '{#label} is required',
  'string.empty': '{#label} is required',
  'string.email': '{#label} must be a valid email',
  'string.min': '{#label} must be at least {#limit} characters',
  'string.max': '{#label} must be at most {#limit} characters',
  'string.uri': '{#label} must be a valid URL'
}

const signupSchema = Joi.object({
  userName: Joi.string().trim().required().email({ tlds: { allow: false } }).label('userName'),
  userPic:Joi.string().trim().optional().allow('', null).uri().label('userPic'),
  password: Joi.string()
  .trim()
  .required()
  .min(8)
  .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])'))
  .message({
    'string.min': 'La contraseña debe tener al menos 8 caracteres',
    'string.pattern.base': 'La contraseña debe incluir al menos una mayúscula, un número y un carácter especial'
  }),
  name: Joi.string().trim().required().max(10).label('name'),
  lastName: Joi.string().trim().required().max(10).label('lastName'),
  rol: Joi.string().optional().allow('', null),
  userPhone: Joi.string().trim().required().label('userPhone')
}).messages(fieldMessages)

const signinSchema = Joi.object({
  userName: Joi.string().trim().required().email({ tlds: { allow: false } }).label('userName'),
  password: Joi.string().trim().required().label('password')
}).messages(fieldMessages)

const signupRequiredFields = ['userName', 'userPic', 'password', 'name', 'lastName']
const signinRequiredFields = ['userName', 'password']

const sendValidationErrors = (res, error, requiredFields) => {
  const errors = error.details.map((detail) => ({
    field: detail.path[0],
    message: detail.message.replace(/"/g, '')
  }))

  return res.status(400).json({
    success: false,
    message: 'Please complete the required fields',
    requiredFields,
    errors
  })
}

const authValidator = {
  accountToValidate: (req, res, next) => {
    const { error } = signupSchema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true
    })
    if (error) {
      return sendValidationErrors(res, error, signupRequiredFields)
    }
    next()
  },
  signinToValidate: (req, res, next) => {
    const { error } = signinSchema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true
    })
    if (error) {
      return sendValidationErrors(res, error, signinRequiredFields)
    }
    next()
  }
}

module.exports = authValidator
