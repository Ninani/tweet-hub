var should = require('chai').should();
var expect = require('chai').expect;
var request = require('supertest');
var path = require('path');

var app = require('../app');
var User = request('../app/models/user');

var user = null;

describe('User Model', function () {

	it('should be an object', function (done){
		User.should.be.an('object');
		done()
	});

	
	it('should return sth', function (done){
		request(app)
			.get('/profile')
			.set('Accept', 'application/json')
			.expect(302)
			.end(function (err, res) {
				if (err) return done(err);
				expect(res.body).to.not.equal(null);
				done()
			});
	})


});