'use strict'

const { Router } = require('express')
const RutaProveedor = require('./rutaProveedor')
const routes = Router()

routes.use('./rutaProveedor', RutaProveedor)

module.exports = routes