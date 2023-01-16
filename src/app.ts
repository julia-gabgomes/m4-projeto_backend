import express from "express";
import "express-async-errors";
import userRoutes from "./routes/users.routes";
import sessionRoutes from "./routes/session.routes";
import postRoutes from "./routes/posts.routes";
import commentRouter from "./routes/comments.routes";
import technologiesRoutes from "./routes/technologies.routes";
import handleError from "./errors/handleError";

const app = express();

app.use(express.json());

app.use("/users", userRoutes);
app.use("/login", sessionRoutes);
app.use("/posts", postRoutes);
app.use("/comments", commentRouter);
app.use("/technologies", technologiesRoutes);

app.use(handleError);

export default app;
