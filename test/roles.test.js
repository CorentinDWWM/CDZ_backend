process.env.NODE_ENV = "test";

import chai from "chai";
import chaiHttp from "chai-http";
const server = require("../index");
const Role = require("../models/role.schema");
const should = chai.should();

chai.use(chaiHttp);

describe("Roles", () => {
  // Avant chaque test, nettoyez la base de données
  beforeEach((done) => {
    Role.deleteMany({}, (err) => {
      done();
    });
  });

  // Après chaque test, nettoyez la base de données
  afterEach((done) => {
    Role.deleteMany({}, (err) => {
      done();
    });
  });

  /*
   * Test the /POST route
   */
  describe("/POST role", () => {
    it("it should POST a new role", (done) => {
      const role = {
        title: "Test Role",
        content: "Aphrodite",
      };
      chai
        .request(server)
        .post("/api/roles")
        .send(role)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a("object");
          res.body.should.have.property("title").eql("Test Role");
          res.body.should.have.property("content").eql("Aphrodite");
          done();
        });
    });
  });

  /*
   * Test the /GET route
   */
  describe("/GET roles", () => {
    it("it should GET all the roles", (done) => {
      chai
        .request(server)
        .get("/api/roles")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          done();
        });
    });
  });

  /*
   * Test the /GET/:id route
   */
  describe("/GET/:id role", () => {
    it("it should GET an role by the given id", (done) => {
      const role = new Role({
        title: "Test Role",
        content: "Aphrodite",
      });
      role.save((err, role) => {
        chai
          .request(server)
          .get("/api/roles/" + role.id)
          .send(role)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.should.have.property("title");
            res.body.should.have.property("content");
            res.body.should.have.property("_id").eql(role.id);
            done();
          });
      });
    });
  });

  /*
   * Test the /PUT/:id route
   */
  describe("/PUT/:id role", () => {
    it("it should UPDATE an role given the id", (done) => {
      const role = new Role({
        title: "Test Role",
        content: "Aphrodite",
      });
      role.save((err, role) => {
        chai
          .request(server)
          .put("/api/roles/" + role.id)
          .send({ title: "Updated Role", content: "Seiya" })
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.should.have.property("title").eql("Updated Role");
            res.body.should.have.property("content").eql("Seiya");
            done();
          });
      });
    });
  });

  /*
   * Test the /DELETE/:id route
   */
  describe("/DELETE/:id role", () => {
    it("it should DELETE an role given the id", (done) => {
      const role = new Role({
        title: "Test Role",
        content: "Seiya",
      });
      role.save((err, role) => {
        chai
          .request(server)
          .delete("/api/roles/" + role.id)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.should.have
              .property("message")
              .eql("Role successfully deleted");
            done();
          });
      });
    });
  });
});
