'use strict'

var mongoose = require('mongoose')

var Schema = mongoose.Schema

var EmpleadoSchema = Schema({
	name: String,
	depto: String,
	correo: {type: String, unique:true}
})

module.exports = mongoose.model('Empleado', EmpleadoSchema)