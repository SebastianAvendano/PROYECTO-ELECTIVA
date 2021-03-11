'use strict'
const { Router } = require('express')
const UserController = require('../controllers/user')

const routes = Router()

/*=============================================
PETICIONES GET
=============================================*/

routes.get('/user', async (req, res) => {
  res.send('Hola')
})

/*=============================================
PETICIONES POST
=============================================*/
routes.post('/create', async (request, res) => {
  const response = await UserController.create(request.body)
  res.json(response)
})

routes.use((error, req, res, next)=>{
  res.status(400).json({
    status: 'error',
    message: error.message

  })
})

/*=============================================
PETICIONES PUT
=============================================*/
routes.put('/edit/:id', async (req, res) => {
  const id = await UserController.edit(req.params.id)
  res.json(id) 
})

/*=============================================
PETICIONES DELETE
=============================================*/
routes.delete('/delete/:id', async (req, res) =>{
	const id = await UserController.delete(req.params.id)
  res.json(id) 

})

module.exports = routes
