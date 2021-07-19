// process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
let server = require('../index');
let should = chai.should();


chai.use(chaiHttp);
const url = 'http://localhost:8080';

describe('Insert a employee: ', () => {
    /*
  * Test the /POST route
  */
    it('should insert a employee', (done) => {
        chai.request(url)
            .post('/')
            .send({ fullname: "Juan Monterrosa", function: "FullStack Developer" })
            .end(function (err, res) {
                console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });

    it('should insert a employee', (done) => {
        chai.request(url)
            .post('/')
            .send({ fullname: "Alfonso Lopez", function: "Gerente" })
            .end(function (err, res) {
                console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });
});


describe('Insert a employee with error: ', () => {
    /*
      * Test the /POST response 400 
      */
    it('should receive an error', (done) => {
        chai.request(url)
            .post('/')
            .send({ fullname: "", function: "" })
            .end(function (err, res) {
                console.log(res.body)
                expect(res).to.have.status(400);
                done();
            });
    });
});

describe('Get all employees', () => {
    /*
      * Test the /GET route
      */
    it('should get all employees', (done) => {
        chai.request(url)
            .get('/')
            .end(function (err, res) {
                console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });

});


describe('Set an employee as a boss: ', () => {
    it('should update the bossId', (done) => {
        chai.request(url)
            .put('/1')
            .send({ bossId: 2 })
            .end(function (err, res) {
                console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });
});
