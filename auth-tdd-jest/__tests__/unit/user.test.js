const bcrypt = require("bcryptjs");

const mongoose = require("mongoose");
mongoose.connect(`mongodb://localhost:27017/test_tdd_jest`, {
  useNewUrlParser: true
});

const User = require("../../src/models/User");

describe("User", () => {
  afterEach(async () => {
    await User.deleteMany({});
  });

  it("should encrypt user password", async () => {
    const user = await User.create({
      name: "Gabriel",
      email: "gab_santos@outlook.com",
      password: "123456"
    });

    const compareHash = await bcrypt.compare("123456", user.password);

    expect(compareHash).toBe(true);
  });

  afterAll(async done => {
    await mongoose.connection.close();
    done();
  });
});
