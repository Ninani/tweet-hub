var mongoose = require('mongoose')

var CategorySchema = new mongoose.Schema({
    text: String,
    twitter_id: String,
    followed_users: [String]
});


module.exports = mongoose.model('Category', CategorySchema)
