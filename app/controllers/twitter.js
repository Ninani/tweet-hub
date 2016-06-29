var error = function (err, response, body) {
    console.log('ERROR [%s]', err);
};

var Category = require('../models/category.js');

var Twitter = require('twitter-node-client').Twitter;

exports.show = function(req, res) {

    var config = {
        "consumerKey": "",
        "consumerSecret": "",
        "accessToken": req.user.twitter_key,
        "accessTokenSecret": req.user.twitter_secret,
        "callBackUrl": "XXX"
    }

    var twitter = new Twitter(config);

    // use mongoose to get all todos in the database
    Category.findById(req.param('category_id'), function(err, category) {

        console.log(category);
        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err)
            res.send(err)

        twitter.getHomeTimeline({count: '30'}, error, function (data) {
            // console.log('Data [%s]', data);
            var tweets = JSON.parse(data);
            var filtered = tweets.filter(function (tweet) {
                return category.followed_users.indexOf(tweet.user.screen_name) >= 0;
            });
            res.send(filtered);
        });
        // res.json(category); // return all categories in JSON format
    });
}
