'use strict'
const UserModel = require('../models/user')

class UserController {
//-------------get-----//
  



//------------post-----//
async create (data) {
    if (data) {
      return UserModel.create(data)
    }




  }
}

module.exports = new UserController()
