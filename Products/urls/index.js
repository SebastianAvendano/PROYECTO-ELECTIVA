'use strict'

const { Router } = require('express')
const ProductRoute = require('./rutaProducto')
const routes = Router()

routes.use('./rutaProducto', ProductRoute)

module.exports = routes