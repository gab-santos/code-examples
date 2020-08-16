const request = require("supertest");

const mongoose = require("mongoose");
mongoose.connect(`mongodb://localhost:27017/test_tdd_jest`, {
  useNewUrlParser: true
});

const app = require("../../src/app");
const User = require("../../src/models/User");
const factory = require("../factories");

describe("Authentication", () => {
  afterEach(async () => {
    await User.deleteMany({});
  });

  it("authenticate with valid credentials", async () => {
    const user = await factory.create("User", {
      password: "123123"
    });

    const response = await request(app)
      .post("/session")
      .send({
        email: user.email,
        password: "123123"
      });

    expect(response.status).toBe(200);
  });

  it("should not authenticate with invalid email", async () => {
    const user = await factory.create("User", {});

    const response = await request(app)
      .post("/session")
      .send({
        email: "gab_santos@outlook.com",
        password: user.password
      });

    expect(response.status).toBe(401);
  });

  it("should not authenticate with invalid password", async () => {
    const user = await factory.create("User", {
      password: "123123"
    });

    const response = await request(app)
      .post("/session")
      .send({
        email: user.email,
        password: "123456"
      });

    expect(response.status).toBe(401);
  });

  it("should return jwt token when authenticated", async () => {
    const user = await factory.create("User", {
      password: "123123"
    });

    const response = await request(app)
      .post("/session")
      .send({
        email: user.email,
        password: "123123"
      });

    expect(response.body).toHaveProperty("token");
  });

  it("should be able to access private routes when authenticated", async () => {
    const user = await factory.create("User", {
      password: "123123"
    });

    const response = await request(app)
      .get("/dashboard")
      .set("Authorization", `Bearer ${user.generatedToken()}`);

    expect(response.status).toBe(200);
  });

  it("should not be able to access private routes without jwt token", async () => {
    const response = await request(app).get("/dashboard");

    expect(response.status).toBe(401);
  });

  it("should not be able to access private routes with invalid jwt token", async () => {
    const response = await request(app)
      .get("/dashboard")
      .set("Authorization", `Bearer 123123`);

    expect(response.status).toBe(401);
  });

  afterAll(async done => {
    await mongoose.connection.close();
    done();
  });
});
