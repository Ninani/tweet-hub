var should = require('chai').should()
var request = require('supertest')
var path = require('path')

var app = require('../app');
var User = request('../app/models/user')

var user = null;

describe('User Model', function () {

	it('should be and object', function (done){
		User.should.be.an('object')
		done()
	})


})