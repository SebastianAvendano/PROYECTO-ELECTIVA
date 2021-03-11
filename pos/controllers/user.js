'use strict'
const UserModel = require('../models/user')
const {param,validationREsult} = require('express-validator')

class UserController {
  async create (data) {
    if (data) {
      return UserModel.create(data)
    }
  }
}

module.exports = new UserController()
