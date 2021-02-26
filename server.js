const express = require('express')
require ('dotenv').config()
require('./config/database')
const cors = require('cors')
const router = require('./routes/index')
const app = express()

app.use(express.json())
app.use(cors())
app.use('/', router)

const PORT = process.env.PORT || 4000
const host=process.env.HOST || '0.0.0.0' 
app.listen(PORT,host,console.log(`IS RUNNIG PORT ${PORT}`))