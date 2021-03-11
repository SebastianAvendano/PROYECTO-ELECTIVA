'use strict'

const { Router } = require('express')
const RutasCategory = require('./rutas_categoria')
const routes = Router()

routes.use('/rutas_categoria', RutasCategory)

module.exports = routes