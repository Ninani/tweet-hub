var Category = require('../models/category.js');
var mongoose = require('mongoose');

exports.index = function(req, res) {
        
    Category.findById(req.param("category_id"), function(err, category) {
        if (err)
            res.send(err)

        res.json(category);
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

    Category.findById(req.param("category_id"), function(err, category) {
        if (err)
            res.send(err)
    
        res.json(category);
    });
    
}

exports.delete = function(req, res) {

    Category.findByIdAndUpdate(
        req.param("category_id"),
        {
            $pull: {"followed_users": req.param("followed_name")}
        },
        {safe: true, upsert: true, new: true},
        function(err, model) {
            console.log(err);
        }
    );

    Category.findById(req.param("category_id"), function(err, category) {
        if (err)
            res.send(err)

        res.json(category);
    });
}
