const routes = require("express").Router();

const authMiddleware = require("./middlewares/auth");

const SessionControler = require("./controllers/SessionController");

routes.post("/session", SessionControler.store);

routes.use(authMiddleware);

routes.get("/dashboard", (req, res) => {
  return res.status(200).send();
});

module.exports = routes;
