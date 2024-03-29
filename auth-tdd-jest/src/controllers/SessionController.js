const bcrypt = require("bcryptjs");
const User = require("../models/User");

module.exports = {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) return res.status(401).json({ message: "User not found!" });

    if (!(await user.checkPassword(password)))
      return res.status(401).json({ message: "Incorrect password!" });

    return res.json({ user, token: user.generatedToken() });
  }
};
