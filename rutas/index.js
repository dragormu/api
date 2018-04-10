'use strict'

var express = require('express')
var empleadoController= require('../controllers/empleado')
var adminController=require('../controllers/admin')
var auth= require('../middlewares/auth')
var api= express.Router()

api.get('/empleado',auth,empleadoController.getEmpleados)
api.get('/empleado/:correo',auth,empleadoController.getEmpleado)
api.post('/empleado',auth,empleadoController.saveEmpleado)
api.put('/empleado/:correo',auth,empleadoController.updateEmpleado)
api.delete('/empleado/:correo',auth,empleadoController.deleteEmpleado)
api.post('/signup',adminController.signUp)
api.post('/signin',adminController.signIn)

module.exports=api