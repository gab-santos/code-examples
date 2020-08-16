import express from "express";
import { getUsers, addUser } from "./repositories/UserRepository";

const app = express();

app.get("/", (req, res) => {
  const users = getUsers();

  return res.json({ users });
});

app.listen(3000, () => {
  return console.log("Server started on port 3000!");
});
