const express = require('express')
const router = express.Router()
const itinerariesController = require('../controllers/itinerariesController')
const dbReady = require('../middlewares/dbReady')

router.use(dbReady)

router.route('/api/itineraries')
  .get(itinerariesController.allItineraries)
  .post(itinerariesController.addItinerary)

router.route('/api/comments')
  .post(itinerariesController.commentsItineraries)

router.route('/api/comments/:iditinerario/:idcomment')
  .delete(itinerariesController.deleteComment)
  .put(itinerariesController.editComment)

router.route('/api/itineraries/:id')
  .get(itinerariesController.itinerariesForId)

router.route('/api/itinerarios/:iditinerario')
  .put(itinerariesController.valorattion)

module.exports = router
