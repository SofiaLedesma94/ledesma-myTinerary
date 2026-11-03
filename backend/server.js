const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '..', '.env') })
require('./config/database')
const express = require('express')
const cors = require('cors')
const router = require('./routes/index')
const errorHandler = require('./middlewares/errorHandler')

const app = express()
const port = process.env.PORT || 4000

app.use(express.json())
app.use(cors())
app.use('/', router)
app.use(errorHandler)

app.listen(port, () => console.log(`app listening on port ${port}`))
