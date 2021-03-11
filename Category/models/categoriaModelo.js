'use strict'
const mongoose = require('mongoose')
const ModeloAbstracto = require('./modeloAbstracto')
const Types = mongoose.Schema.Types

const Schema = new mongoose.Schema({
  name: {
    type: Types.String,
    lowercase: true,
    require: [true, 'El nombre es requerido']
  },
  descripcion: {
    type: Types.String,
    lowercase: true,
    require: [true, 'la descripcion es requerida']
  },
  createAt: {
    type: Types.Date,
    default: Date.now
  }
})

class Categoria extends ModeloAbstracto {
  constructor () {
    super()
    this.model = mongoose.model('Categoria', Schema)
    this.sort = { createAt: 1 }
  }a
}

module.exports = new Categoria()