'use strict'
var mysql = require('mysql');
var Empleado = require('../modelos/empleado')
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: 'mybd',
  port:3306
});

function getEmpleados(req,res){
	con.connect(function(err) {
	  	if (err) throw err;
	  	con.query("SELECT * FROM empleado", function (err, result, fields) {
	    if (err) throw err;
	    res.status(200).send({result});
	  	});
	});
}

function getEmpleado(req,res){
	let empleadoId = req.params.correo
	con.connect(function(err) {
	  	if (err) throw err;
	  	con.query("SELECT * FROM empleado where correo = ?",[empleadoId], function (err, result, fields) {
	    if (err) throw err;
	    res.status(200).send({result});
	  	});
	});
}

function saveEmpleado(req,res){
	console.log('POST /api/empleado')
	var name = req.body['name']
	var depto = req.body['depto']
	var correo = req.body['correo']
	con.connect(function(err) {
	  if (err) throw err;
	  console.log("Connected!");
	  con.query('INSERT INTO empleado(name, depto, correo) VALUES(?, ?, ?)',[name,depto,correo], function (err, result) {
	    if (err) throw err;
	    res.status(200).send({message: "1 record inserted"});
	  });
	});
}

function updateEmpleado(req,res){
	let empleadoId = req.params.correo
	con.connect(function(err) {
	if (err) throw err;
	console.log("Connected!");
	var name = req.body['name'];
	var depto = req.body['depto'];
	var correo = req.body['correo'];
	if(name!=undefined){
		con.query("UPDATE empleado SET name = ? WHERE correo = ?",[name,empleadoId], function (err, result) {
		if (err) throw err;
		res.status(200).send({message: "1 record updated"});
		  });
	}
	if(depto!=undefined){
		con.query("UPDATE empleado SET depto = ? WHERE correo = ?",[depto,empleadoId], function (err, result) {
		if (err) throw err;
		res.status(200).send({message: "1 record updated"});
		  });
	}
	if(correo!=undefined){
		con.query("UPDATE empleado SET correo = ? WHERE correo = ?",[correo,empleadoId], function (err, result) {
		if (err) throw err;
		res.status(200).send({message: "1 record updated"});
		  });
	}
	});
}

function deleteEmpleado(req,res){
	let empleadoId = req.params.correo
	con.connect(function(err) {
	  	if (err) throw err;
	  	con.query("DELETE FROM empleado where correo = ?",[empleadoId], function (err, result, fields) {
	    if (err) throw err;
	    res.status(200).send({message: "1 record deleted"});
	  	});
	});
}

module.exports = {
	getEmpleado,
	getEmpleados,
	saveEmpleado,
	updateEmpleado,
	deleteEmpleado
}