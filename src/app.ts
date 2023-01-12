import express from "express";
import "express-async-errors";
import handleError from "./errors/handleError";
import technologiesRoutes from "./routes/technologies.routes";

const app = express();

app.use(express.json());

app.use("/technologies", technologiesRoutes);

app.use(handleError);

export default app;
