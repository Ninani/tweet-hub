
// Controllers
var index = require('../app/controllers/index.js')
var users = require('../app/controllers/users.js')
var categories = require('../app/controllers/category.js')
var twitter = require('../app/controllers/twitter.js')
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
	// app.get('/users', 		users.index);
	app.post('/users/new', 	users.create);
	app.get('/profile', isAuthenticated, users.read);
	// app.put('/users/:id', users.update);
	app.delete('/delete/:id',users.delete);
	
	/* Categories */
	app.get('/api/categories', isAuthenticated, categories.index);
	app.post('/api/categories', isAuthenticated, categories.create);
	app.delete('api/categories/:category_id', isAuthenticated, categories.delete);

	/* Twitter */
	app.get('/api/thiscategory/:category_id', twitter.show);

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
			res.redirect('/profile')
		})


}

function isAuthenticated(req, res, next) {
	if (req.isAuthenticated()) {return next();}
	res.redirect('/');
	
}