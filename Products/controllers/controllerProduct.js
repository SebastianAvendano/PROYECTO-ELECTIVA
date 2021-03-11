'use strict'

const ModelProduct = require('../models/ProductModel')

class Controlador {

    async create (data) {
        if (data){
            return ModelProduct.create(data)
        }
    }
}

module.exports = new Controlador()