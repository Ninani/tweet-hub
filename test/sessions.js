var should = require('chai').should();
var expect = require('chai').expect;
var request = require('supertest');
var path = require('path');

var app = require('../app');

describe('Test app sessions', function () {
    
    it('should redirect to start page after logout', function (done){
        request(app)
            .get('/logout')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function (err, res) {
                expect(res.redirect).to.equal(true);
                done()
            });
    });
    
    it('should redirect to main page', function (done){
        request(app)
            .get('/auth/twitter/callback')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function (err, res) {
                expect(res.redirect).to.equal(true);
                done()
            });
    });


});