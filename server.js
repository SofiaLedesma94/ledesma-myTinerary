const express = require('express')
require ('dotenv').config()
require('./config/database')
const cors = require('cors')
const router = require('./routes/index')
const app = express()

app.use(express.json())
app.use(cors())
app.use('/', router)

const port = process.env.PORT 
app.listen(port,console.log('app listening on port 4000'))