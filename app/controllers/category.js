// app.get('/profile/categories', categories.index);
// app.post('/profile/categories', categories.create);
// app.delete('profile/categories/:category_id', categories.delete);

var Category = require('../models/category.js');

exports.index = function(req, res) {

    Category.find({twitter_id: req.user.twitter_id}, function(err, categories) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err)
            res.send(err)

        res.json(categories); // return all categories in JSON format
    });
}

exports.create = function(req, res) {

    Category.create({
        text : req.body.text,
        twitter_id : req.user.twitter_id,
        done : false
    }, function(err, category) {
        if (err)
            res.send(err);

        // get and return all the categories after you create another
        Category.find({twitter_id: req.user.twitter_id}, function(err, categories) {
            if (err)
                res.send(err)
            res.json(categories);
        });
    });
}

exports.delete = function(req, res) {
    Category.remove({
        _id : req.params.category_id
    }, function(err, category) {
        if (err)
            res.send(err);

        // get and return all the categories after you create another
        Category.find({twitter_id: req.user.twitter_id}, function(err, categories) {
            if (err)
                res.send(err)
            res.json(categories);
        });
    });
}