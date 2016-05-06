var passport = require("passport")
var passportTwitter = require("passport-twitter")
var config = require('./config.json')
var User = require("../app/models/user.js")

module.exports = function(app) {

	var TwitterStrategy = passportTwitter.Strategy
	passport.serializeUser(function(user, done) {
    	done(null, user._id)
	})
	passport.deserializeUser(function(obj, done) {
    	User.findById(obj, function(err, user) {
    		done(err, user)
    	})
  	})


	passport.use(new TwitterStrategy({
		consumerKey: config.twitter.key,
		consumerSecret: config.twitter.secret,
		callbackURL: 'http://localhost:3000/auth/twitter/callback'
	}, function(token, tokenSecret, profile, done) {
		User.findOneAndUpdate({twitter_id: profile.id}, {
			name: profile.displayName,
			twitter_id: profile.id,
			twitter_username: profile.username,
			twitter_key: token,
			twitter_secret: tokenSecret
		}, function(err, user) {
			console.log(user)
			if (err) {
				done(err, null)
				return
			}
			if (!user) {
				User.create({
					name: profile.displayName,
					twitter_id: profile.id,
					twitter_username: profile.username,
					twitter_key: token,
					twitter_secret: tokenSecret
				}, done)
			} else {
				done(err, user)
			}
		})
	}))

app.use(passport.initialize())
app.use(passport.session())

	return passport
}