const express = require('express')
require ('dotenv').config()
require('./config/database')
const app = express()



app.listen(4000, ()=> console.log('app listening on port 4000'))