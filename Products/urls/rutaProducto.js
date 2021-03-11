'use strict'

const express = require('express')
const ProductControl = require('../controllers/controllerProduct')

const routes = express.Router()

/*=============================================
PETICIONES GET
=============================================*/
routes.get('/controllerProduct', async (req, res) => {
    res.send("Que tal")
})

/*=============================================
PETICIONES POST
=============================================*/
routes.post('/crear', (req, res) =>{
    const response = ProductControl.crear(req.body)
    res.json(response)
})

/*=============================================
PETICIONES PUT
=============================================*/
routes.put('/edit/:id', async (req, res) => {
    const id = await ProductControl.edit(req.params.id)
    res.json(id) 
})

/*=============================================
PETICIONES DELETE
=============================================*/
routes.delete('/delete/:id', async (req, res) =>{
	const id = await ProductControl.delete(req.params.id)
    res.json(id) 

})

module.exports = routes