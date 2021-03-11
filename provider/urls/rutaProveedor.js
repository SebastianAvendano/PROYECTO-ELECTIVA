'use strict'

const express = require('express')
const ProvidController = require('../controladores/ControlProveedor')

const routes = express.Router()

/*=============================================
PETICIONES GET
=============================================*/
routes.get('/ControlProoveedor', async (req, res) => {
    res.send("Que tal")
})

/*=============================================
PETICIONES POST
=============================================*/
routes.post('/crear', (req, res) =>{
    const response = ProvidController.crear(req.body)
    res.json(response)
})

/*=============================================
PETICIONES PUT
=============================================*/
routes.put('/edit/:id', async (req, res) => {
    const id = await ProvidController.edit(req.params.id)
    res.json(id) 
})

/*=============================================
PETICIONES DELETE
=============================================*/
routes.delete('/delete/:id', async (req, res) =>{
	const id = await ProvidController.delete(req.params.id)
    res.json(id) 

})

module.exports = routes