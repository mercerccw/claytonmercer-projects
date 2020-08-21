// Import the dependencies for testing
const chai = require('chai');
const chaiHttp = require('chai-http');
const {app, isProduction} = require('../index.js');
// Configure chai
chai.use(chaiHttp);
chai.should();
let assert = chai.assert;
describe("Projects", () => {
    describe("GET /projects", () => {
        // Test to get all projects record
        it("should get all projects record", (done) => {
             chai.request(app)
                 .get('/projects')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     done();
                  });
         });
        // Test to get single project record
        it("should get a single project record", (done) => {
             const id = 1;
             chai.request(app)
                 .get(`/projects/${id}`)
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     done();
                  });
         });
         
        // Test to get single project record
        it("should not get a single project record", (done) => {
             const id = 5;
             chai.request(app)
                 .get(`/projects/getProject/${id}`)
                 .end((err, res) => {
                     res.should.have.status(404);
                     done();
                  });
         });
    });
});
describe("Production Ready?", () => {
    it("App should be set to production mode", (done) => {
        assert(isProduction);
        done();
    })
});