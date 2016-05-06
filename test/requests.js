var should = require('chai').should()
var request = require('supertest')
var path = require('path')

var app = require('../app');

describe('Test App Requests', function () {
	it('should run', function (done) {
		request(app).get('/').expect('Content-Type', /html/).expect(200, done)
	})
})