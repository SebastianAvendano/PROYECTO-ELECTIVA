'use strict'

const ModeloCategoria = require('../models/categoriaModelo')

class Controlador {

    async create (data) {
        if (data){
            return ModeloCategoria.create(data)
        }
    }
}

module.exports = new Controlador()