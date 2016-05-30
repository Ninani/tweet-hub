// var Twitter = require('twitter');
//
// var client = new Twitter({
//     consumer_key: 'WnKwZSVri8i7inhvWnLHZ7oHI',
//     consumer_secret: 'W0IFa4NmAYomDjwf13SwT8dgFeIRLn7AyHJ3giBxb4h7TZiSEa',
//     access_token_key: '720990015245938688-h6RwDbxmiaaBApcznpPt7ZHJFhB1lzO',
//     access_token_secret: 'HyAq14ve7TOHRII7Fv7kwDZVfznvHSKxJ0POY9QwIlBrU'
// });
//
// client.get('favorites/list', function(error, tweets, response){
//     if(error) throw error;
//     console.log(tweets);  // The favorites.
//     // console.log(response);  // Raw response object.
// });

//Callback functions
var error = function (err, response, body) {
    console.log('ERROR [%s]', err);
};
var success = function (data) {
    console.log('Data [%s]', data);
};

var Twitter = require('twitter-node-client').Twitter;

//Get this data from your twitter apps dashboard
var config = {
    "consumerKey": "",
    "consumerSecret": "",
    "accessToken": "",
    "accessTokenSecret": "",
    "callBackUrl": "XXX"
}

var twitter = new Twitter(config);

//Example calls
console.log(twitter.getHomeTimeline({count: '5'}, error, success));

