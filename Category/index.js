/*=============================================
REQUERIMIENTOS De Las Importaciones
=============================================*/
'use strict'

require('./config/db')
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const routes = require('./urls')

<<<<<<< HEAD
/*=============================================
Creo la variable app para tener todas las funcionalidades de EXPRESS y fijamos el puerto al cual vamos a acceder a nuestro proyecto
=============================================*/
=======
>>>>>>> a6687b0c114521bbccd079154cc78c8f6a2b72b8
const port = 3002
const app = express()


app.use(cors())

/*=============================================
MIDDLEWARE o Bloque de Codigo PARA BODY PARSER
=============================================*/
app.use(bodyParser.urlencoded({ extended: true, limit: '2000mb' }))
app.use('', routes)


/*=============================================
SALIDA PUERTO HTTP
=============================================*/    
app.listen(port, () =>{

    console.log(`server listening on port ${port}`)
})
