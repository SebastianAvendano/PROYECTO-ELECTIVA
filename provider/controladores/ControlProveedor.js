'use strict'

const ModelProvider = require('../models/ModeloProveedor')

class Controlador {

    async create (data) {
        if (data){
            return ModelProvider.create(data)
        }
    }
}

module.exports = new Controlador()