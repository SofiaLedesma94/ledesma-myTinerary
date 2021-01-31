const express = require('express')
const router = express.Router()
const citiesController= require('../controller/citiesController') 
const ItinerariesController= require('../controller/ItinerariesController')
const activitiesController= require('../controller/activitiesController')
const { addItinerary } = require('../controller/ItinerariesController')



router.route('/api/cities')
.get(citiesController.allCities)
.post(citiesController.addCity)
router.route('/api/itineraries')
.get(ItinerariesController.allItineraries)
.post(ItinerariesController.addItinerary)
router.route('/api/itineraries/:id')
.get(ItinerariesController.itinerariesForId)

 

module.exports = router