var Category = require('../models/category.js');
var mongoose = require('mongoose');

exports.index = function(req, res) {

    // use mongoose to get all todos in the database
    Category.findById(req.params.category_id, function(err, category) {
        if (err)
            res.send(err)
        
        res.json(category.followed_users);
    });
}

exports.add = function(req, res) {
    
    Category.findByIdAndUpdate(
        req.param("category_id"),
        {
            $push: {"followed_users": req.body.text}
        },
        {safe: true, upsert: true, new: true},
        function(err, model) {
            console.log(err);
        }
    );

    mongoose.model('Category').find(function(err, category) {
      console.log(category);
    });
    
    Category.findById(req.param("category_id"), function(err, category) {
        if (err)
            res.send(err)
    
        res.json(category.followed_users);
    });
    
}

exports.delete = function(req, res) {
    Category.update(
        { _id: req.params.category_id},
        { $pull: { 'followed_users': req.params.followed_user_name }}
    );

    Category.findById(req.params.category_id, function(err, category) {
        if (err)
            res.send(err)

        res.json(category.followed_users);
    });
}
