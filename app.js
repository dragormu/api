'use strict'
var config= require('./config')
var express=require('express')
var bodyParser=require('body-parser')

var app = express()
var api= require('./rutas')
var mysql = require('mysql');
var connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'mybd',
   port: 3306
});

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use('/api',api)

module.exports= app