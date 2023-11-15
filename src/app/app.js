import express from "express";
import routes from "./routes.js";

const app = express();

import cors from "cors";
app.use(cors())

app.use(express.json());

app.use(routes);

export default app;