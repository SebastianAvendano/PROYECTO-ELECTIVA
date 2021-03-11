'use strict'

const mongoose = require('mongoose')
const ModelAbstract = require('./abstractModel')
const Types = mongoose.Schema.Types 

const Esquema = new mongoose.Schema({

      name: {
        type: Types.String,
        lowercase: true,
        require: [true, 'El nombre es requerido']
      },
      valueCompra:{
        type: Types.String,
        lowercase: true,
        require: [true, 'El nombre es requerido']
      },
      dateCompra:{
          type: Types.Date,
          lowercase: true,
          require: [true, 'la fecha es requerida']
      },
      isActive: {
        type: Types.Boolean,
        default: false
      },
      createAt: {
        type: Types.Date,
        default: Date.now
      }
})

class Product extends ModelAbstract{

    constructor(){
        super()
        this.model = mongoose.model('Product', Esquema)
        this.sort = { createAt: 1}
    }
}

module.exports = new Product()