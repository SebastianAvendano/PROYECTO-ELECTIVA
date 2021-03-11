' use strict'

const { Router } = require('express')
const Controlador = require('../controllers/controladorCategoria')

const routes = Router()

/*=============================================
PETICIONES GET
=============================================*/
routes.get('/controladorCategoria', async (req, res) => {
    res.send("Que tal")
})

/*=============================================
PETICIONES POST
=============================================*/
routes.post('/create', (req, res) =>{
    const response = Controlador.create(req.body)
    res.json(response)
})

/*=============================================
PETICIONES PUT
=============================================*/
routes.put('/edit/:id', async (req, res) => {
    const id = await Controlador.edit(req.params.id)
    res.json(id) 
})

/*=============================================
PETICIONES DELETE
=============================================*/
routes.delete('/delete/:id', async (req, res) =>{
	const id = await Controlador.delete(req.params.id)
    res.json(id) 

})

module.exports = routes