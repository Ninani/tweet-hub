//Callback functions
var error = function (err, response, body) {
    console.log('ERROR [%s]', JSON.stringify(err));
};
var success = function (data) {
    console.log('Data [%s]', data);
};

var User = require("../app/models/user.js")
var config = require('./config.json');

var Twitter = require('twitter-js-client').Twitter;


module.exports = function(app) {

    //Get this data from your twitter apps dashboard
    var config = {
        "consumerKey": config.twitter.key,
        "consumerSecret": config.twitter.secret,
        "accessToken": "720990015245938688-h6RwDbxmiaaBApcznpPt7ZHJFhB1lzO",
        "accessTokenSecret": "HyAq14ve7TOHRII7Fv7kwDZVfznvHSKxJ0POY9QwIlBrU",
        "callBackUrl": config.twitter.callback
    }

    var twitter = new Twitter(config);

//Example calls
    twitter.getHomeTimeline({ count: '10'}, error, success);

    return twitter;
}
