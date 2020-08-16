const mongoose = require("mongoose");

mongoose.connect(`mongodb://localhost:27017/tdd_jest`, {
  useNewUrlParser: true
});

const app = require("./app");

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started on port 3000 :)");
});
