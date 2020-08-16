const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require("dotenv").config({
  path: ".env"
});

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true
    },
    email: {
      type: String,
      unique: true,
      require: true
    },
    password: {
      type: String,
      require: true
    }
  },
  {
    timestamps: true
  }
);

UserSchema.pre("save", async function(next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

UserSchema.methods.checkPassword = function(password) {
  return bcrypt.compare(password, this.password);
};

UserSchema.methods.generatedToken = function() {
  return jwt.sign({ id: this.id }, process.env.APP_SECRET);
};

module.exports = mongoose.model("User", UserSchema);
