const express = require('express')
const router = express.Router()
const citiesController= require('../controller/citiesController') 



router.route('/api/cities')
.get(citiesController.allCities)
.post(citiesController.addCity)
router.route('/api/itineraries/:id')
.get(citiesController.oneCitie)
 

module.exports = router