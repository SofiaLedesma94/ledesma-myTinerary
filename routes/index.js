const express = require('express')
const router = express.Router()
const citiesController= require('../controller/citiesController') 
const ItinerariesController= require('../controller/ItinerariesController')
const userController =require('../controller/userController')
const validator = require('../controller/validator')
const passport =require('passport')
require('../config/passport')





router.route('/api/cities')
.get(citiesController.allCities)
.post(citiesController.addCity)
router.route('/api/itineraries')
.get(ItinerariesController.allItineraries)
.post(ItinerariesController.addItinerary)
router.route('/api/comments')
.post(ItinerariesController.commentsItineraries)
router.route('/api/itineraries/:id')
.get(ItinerariesController.itinerariesForId)
router.route('/api/user/signup')  //creamos usuario
.post(validator.accountToValidate,userController.signup)
router.route('/api/user/signin')  //logueo usuario existente 
.post(userController.signin)
router.route('/api/ls')
//ruta protegida por passport
.post(passport.authenticate('jwt', {session: false}),userController.logFromLocalStorage)



 

module.exports = router