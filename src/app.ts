import express from "express";
import "express-async-errors";
import sessionRoutes from "./routes/session.routes";
import userRoutes from "./routes/users.routes";
import postRouter from "./routes/posts.routes";
import handleError from "./errors/handleError";

const app = express();

app.use(express.json());

app.use("/users", userRoutes);
app.use("/login", sessionRoutes);
app.use("/posts", postRouter);

app.use(handleError);

export default app;
