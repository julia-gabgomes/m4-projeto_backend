import express from "express";
import "express-async-errors";
import sessionRoutes from "./routes/session.routes";
import userRouter from "./routes/users.routes";
import postRouter from "./routes/posts.routes";
import technologiesRoutes from "./routes/technologies.routes";
import handleError from "./errors/handleError";

const app = express();

app.use(express.json());

app.use("/users", userRouter);
app.use("/login", sessionRoutes);
// app.use('/posts', postRouter)
app.use("/technologies", technologiesRoutes);

app.use(handleError);

export default app;
