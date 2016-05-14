var mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
	id: {
		type: Number,
		index: true
	},
	name: String,
	twitter_id: String,
	twitter_username: String,
	twitter_key: String,
	twitter_secret: String,
	categories: [{title: String, keyword: String}]
})

var autoIncrement = require('mongoose-auto-increment')
var db = require('../../db/connect')
autoIncrement.initialize(db)

UserSchema.plugin(autoIncrement.plugin, {field: "id"})

module.exports = mongoose.model('User', UserSchema)