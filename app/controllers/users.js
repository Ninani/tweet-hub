
var User = require('../models/user.js')

exports.create = function (req, res) {
	var user = new User({
		name: req.body.name
	})

	user.save(function (err) {
		if (err)
			console.log(err)
		else
			res.redirect('/users')
	})
}

exports.index = function (req, res) {
	User.find({}, function (err, users) {
		console.log(users)

	})
}
exports.read = function (req, res) {
	User.findById(req.user._id, function (err, user) {
		if (err) {
			console.log('not found')
			console.log(err)
			res.send(404)
		} else {
			res.render('profile', {
				user: req.user,
				loggedin: req.session.alive
			})
		}
	})
}
exports.update = function (req, res) {}
exports.delete = function (req, res) {
	User.findById(req.user._id, function (err, user) {
		if (err)
			console.log(err)
		else
			user.remove(function (err) {
				if (err)
					console.log(err)
				else
					res.redirect('/users')
			})
	})
}



