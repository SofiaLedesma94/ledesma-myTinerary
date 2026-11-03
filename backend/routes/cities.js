const express = require('express')
const router = express.Router()
const citiesController = require('../controllers/citiesController')
const dbReady = require('../middlewares/dbReady')

router.use(dbReady)

router.route('/api/cities')
  .get(citiesController.allCities)
  .post(citiesController.addCity)

module.exports = router
