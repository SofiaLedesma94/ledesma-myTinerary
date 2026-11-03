const express = require('express')
const router = express.Router()
const citiesRoutes = require('./cities')
const itinerariesRoutes = require('./itineraries')
const usersRoutes = require('./users')

router.use(citiesRoutes)
router.use(itinerariesRoutes)
router.use(usersRoutes)

module.exports = router
