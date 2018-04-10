'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema
var bcrypt = require('bcrypt-nodejs')

var AdminSchema = new Schema({
	username: { type: String, unique: true, lowercase: true},
	password: { type: String , select: false}
})

AdminSchema.pre('save',function(next){
	let admin= this
	if (!admin.isModified('password')) return next()

	bcrypt.genSalt(10,(err,salt)=>{
		if (err) return next()

		bcrypt.hash(admin.password,salt,null,(err,hash)=>{
			if(err) return next(err)

			admin.password = hash
			next()
		})
	})
})

AdminSchema.methods.comparePassword = function(candidatePassword,cb){
	bcrypt.compare(candidatePassword,this.password,(err,isMatch)=>{
		cb(err,isMatch)
	})
}


module.exports = mongoose.model('Admin',AdminSchema)