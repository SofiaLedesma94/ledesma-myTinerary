const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userController = {
  signup: async (req, res, next) => {
    try {
      const { userName, password, userPic, name, lastName, userPhone } = req.body
      const existingUser = await User.findOne({ userName })
      if (existingUser) {
        return res.status(409).json({
          success: false,
          message: 'This user already exists, choose another email',
          errors: [{ field: 'userName', message: 'This user already exists, choose another email' }]
        })
      }

      const hashedPassword = bcrypt.hashSync(password, 10)
      // Creamos el objeto con los datos obligatorios
      const userData = {
        userName,
        password: hashedPassword,
        name,
        lastName,
        userPhone
      }

      // Solo si el usuario envió un userPic válido (y no viene vacío), lo agregamos.
      // Si no viene, lo omitimos para que Mongoose active el default con las iniciales.
      if (userPic && userPic.trim() !== '') {
        userData.userPic = userPic
      }

      const savedUser = await new User(userData).save()


      const token = jwt.sign({ ...savedUser }, process.env.secret_word, {})
      return res.json({
        success: true,
        response: { token, userPic: savedUser.userPic, userName: savedUser.userName }
      })
    } catch (error) {
      next(error)
    }
  },

  signin: async (req, res, next) => {
    try {
      const { userName, password } = req.body
      const existingUser = await User.findOne({ userName })
      if (!existingUser) {
        return res.status(401).json({
          success: false,
          message: 'Wrong username or password'
        })
      }

      const validPassword = bcrypt.compareSync(password, existingUser.password)
      if (!validPassword) {
        return res.status(401).json({
          success: false,
          message: 'Wrong username or password'
        })
      }

      const token = jwt.sign({ ...existingUser }, process.env.secret_word, {})
      return res.json({
        success: true,
        response: {
          token,
          userPic: existingUser.userPic,
          userName: existingUser.userName
        }
      })
    } catch (error) {
      next(error)
    }
  },

  logFromLocalStorage: (req, res) => {
    return res.json({
      success: true,
      response: {
        token: req.body.token,
        userPic: req.user.userPic,
        userName: req.user.userName
      }
    })
  }
}

module.exports = userController
