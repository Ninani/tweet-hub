var should = require('chai').should()
var request = require('supertest')
var path = require('path')

var app = require('../app');
var Category = request('../app/models/category')

var category = null;

describe('Category Model', function () {

    it('should be and object', function (done){
        Category.should.be.an('object')
        done()
    })

    it('should send error if category does not exist', function (done){
        request(app)
            .delete('/api/categories/not_exist')
            .set('Accept', 'application/json')
            .expect(404)

        done()
    })


});
