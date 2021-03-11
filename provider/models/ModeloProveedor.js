'use strict'

const mongoose = require('mongoose')
const ModelAbstract = require('./abstractModel')
const Types = mongoose.Schema.Types 

const Esquema = new mongoose.Schema({

    identification: {
        type: Types.String
      },
      name: {
        type: Types.String,
        lowercase: true,
        require: [true, 'El nombre es requerido']
      },
      email: {
        type: Types.String,
        require: [true, 'El email es requerido']
      },
      cellphone: {
        type: Types.Number,
        lowercase: true,
        require: [true, 'El teléfono es requerido']
      },
      direction:{
        type: Types.String,
        lowercase: true,
        require: [true, 'El nombre es requerido']
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

class Provider extends ModelAbstract{

    constructor(){
        super()
        this.model = mongoose.model('Provider', Esquema)
        this.sort = { createAt: 1}
    }
}

module.exports = new Provider()