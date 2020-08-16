import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express();

app.use(cors());
app.use(routes);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));