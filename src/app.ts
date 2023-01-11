import express from "express";
import "express-async-errors";
import postRouter from "./routes/posts.routes";
// import handleError from './errors/handleError'

const app = express();

app.use(express.json());

app.use('/posts', postRouter)
// AS ROTAS VÃO AQUI

app.get("/teste", (req, res) => {
  return res.send("a rota teste funciona");
});

// app.use(handleError);

export default app;
