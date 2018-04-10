'use strict'
var mysql = require('mysql');
var app=require('./app');
var config= require('./config');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: 'mybd',
  port:3306
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  app.listen(3000,function(){
  console.log('API REST corriendo en http://localhost:3000')
  })
});

