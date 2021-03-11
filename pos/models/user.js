'use strict'
const mongoose = require('mongoose')
const AbstractModel = require('./abstractModel')
const Types = mongoose.Schema.Types

const Schema = new mongoose.Schema({
  
  purchase: {
    type: Types.Number,
    lowercase: true,
    require: [true, 'Ingrese el valor de compra']
  },
  createAt: {
    type: Types.Date,
    default: Date.now
  },
  isActive: {
    type: Types.Boolean,
    default: false
  }
})

class User extends AbstractModel {
  constructor () {
    super()
    this.model = mongoose.model('User', Schema)
    this.sort = { createAt: 1 }
  }
}

module.exports = new User()
