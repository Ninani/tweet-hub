
var mongoose = require('mongoose');
var config = require('../config/config.json')

var db = mongoose.createConnection(config.mongodb);

db.on('error', console.error)

module.exports = db