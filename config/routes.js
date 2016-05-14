
// Controllers
var index = require('../app/controllers/index.js')
var users = require('../app/controllers/users.js')
// var twitter = require('../app/controllers/twitter.js')

// Models
var User = require('../app/models/user.js');

module.exports = function (app) {
	app.get('/', index.index);

	/* Params for :user */ 
	app.param('id', function (req, res, next, id){
	  User.findOne({id: id}, function (err, user){

	  	if (err) console.error(err)

	  	if (user)
	  		req.user = user
	    next();
	  });
	});
	

	/* Users */
	app.get('/users', 		users.index);
	app.post('/users/new', 	users.create);
	app.get('/users/:id', users.read);
	app.put('/users/:id', users.update);
	app.delete('/users/:id',users.delete);


	/* Sessions */
	var passport = require('./passport')(app)

	app.get('/logout', function (req, res){
		req.session.alive = undefined;
		req.logout();
		res.redirect('/');
	});

	app.get('/auth/twitter', passport.authenticate('twitter'));
	app.get('/auth/twitter/callback', 
		passport.authenticate('twitter', {failureRedirect: '/signin'}),
		function (req, res) {
			req.session.alive = true;
			res.redirect('/users/'+req.user.id)
		})


}