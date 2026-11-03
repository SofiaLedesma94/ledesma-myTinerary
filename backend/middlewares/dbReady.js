const mongoose = require('mongoose')

const dbReady = (req, res, next) => {
  if (mongoose.connection.readyState !== 1) {
    return res.status(503).json({
      success: false,
      message: 'Database is not available. Please try again later.'
    })
  }
  next()
}

module.exports = dbReady
