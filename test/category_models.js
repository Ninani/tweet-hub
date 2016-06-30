var utils = require('./utils');
var should = require('chai').should();
var request = require('supertest');
var path = require('path');

var app = require('../app');
var Category = request('../app/models/category');

var category = null;

describe('Category Model', function () {

    it('should be and object', function (done){
        Category.should.be.an('object')
        done()
    });

    it('should list all created categories', function (done) {
        request(app)
            .get('/api/categories')
            .end(function (err, res) {
                res.status.should.equal(302);
                res.should.be.json;
                res.should.have.property('text');
                done();
            });
    });

    it('should create a new Category and redirect', function (done) {
        request(app)
            .post('/api/categories')
            .send({'text': 'whatever', 'twitter_id': '123456'})
            .end(function (err, res) {
                res.status.should.equal(302);
                res.should.be.json;
                res.should.have.property('text');
                res.header['location'].should.include('/');

                done();
            });
    });


    it('should send error if category does not exist', function (done){
        request(app)
            .delete('/api/categories/not_exist')
            .set('Accept', 'application/json')
            .expect(404)

        done()
    })

    // describe('#create()', function () {
    //     it('should create a new Category', function (done) {
    //         var u = {
    //             text : 'whatever',
    //             twitter_id : '123456',
    //             done : false
    //         };
    //         Category.create(u, function (err, category) {
    //             should.not.exist(err);
    //             // category.text.should.equal('whatever');
    //             // category.twitter_id.should.equal('123456');
    //             done();
    //         });
    //     });
    // });


});
