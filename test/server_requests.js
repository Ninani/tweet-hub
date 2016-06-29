var should = require('chai').should()
var request = require('supertest')
var path = require('path')

var app = require('../app');

describe('Test Server Requests', function () {
	it('should run', function (done) {
		request(app).get('/').expect('Content-Type', /html/).expect(200, done)
	});

	it("should return 404",function(done){
		request(app)
			.get("/random")
			.expect(404, done)
			.end(function(err,res){
				res.status.should.equal(404);
				done();
			});
	})


});