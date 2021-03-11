'use strict'
require('./config/db')
const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./urls')

const port = 3001
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true, limit: '2000mb' }))
app.use('', routes)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
