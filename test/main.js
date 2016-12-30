var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../bin/www');
var should = chai.should();

chai.use(chaiHttp);

describe('Timestamp Microservice', function() {

  describe('/GET Timestamp', function() {

    it ('it should return a date when a unix date is passed', function(done) {
      chai.request(server)
        .get('/12345678999')
        .end(function(err, res) {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.should.be.json;
          res.body.should.have.property('unix').not.equal(null);
          res.body.should.have.property('natural').not.equal(null);
          done();
        });
    });

    it ('it should return a date when a natural date is passed', function(done) {
      chai.request(server)
        .get('/December%2030,%202016')
        .end(function(err, res) {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.should.be.json;
          res.body.should.have.property('unix').not.equal(null);
          res.body.should.have.property('natural').not.equal(null);
          done();
        });
    });

    it ('it should return null properties when invalid date is passed', function(done) {
      chai.request(server)
        .get('/cat')
        .end(function(err, res) {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.should.be.json;
          res.body.should.have.property('unix').equal(null);
          res.body.should.have.property('natural').equal(null);
          done();
        });
    });

  });

});