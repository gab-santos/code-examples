const faker = require("faker");
const { factory } = require("factory-girl");
const User = require("../src/models/User");

factory.define("User", User, {
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password()
});

module.exports = factory;
