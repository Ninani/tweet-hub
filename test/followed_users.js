var should = require('chai').should();
var expect = require('chai').expect;
var request = require('supertest');
var path = require('path');

var app = require('../app');

describe('Test followed users requests', function () {


    it('should not send tweets if the category does not exist', function (done){
        request(app)
            .get('/api/followed/hmmmm')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                expect(res.body).to.equal('');
                done()
            });
    });

    it('should send error if category does not exist', function (done){
        request(app)
            .delete('/api/followed/not_exist/whatever')
            .set('Accept', 'application/json')
            .expect(404)

        done()
    })



});
