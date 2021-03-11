'use strict'
const mongoose = require('mongoose')

/*=============================================
CONEXIÓN A LA BASE DE DATOS
=============================================*/
mongoose.connect('mongodb://localhost/maintenance', { useNewUrlParser: true, useCreateIndex: true })
const db = mongoose.connection

db.on('error', (error) => {
    console.log(`MongoDB connection error: ${error}`)
    process.exit(0)
})

module.exports = db