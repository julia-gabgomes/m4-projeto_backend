import express from "express";
import "express-async-errors";
// import handleError from './errors/handleError'

const app = express();

app.use(express.json());

// AS ROTAS VÃO AQUI

app.get("/teste", (req, res) => {
  return res.send("a rota teste funciona");
});

// app.use(handleError);

export default app;
