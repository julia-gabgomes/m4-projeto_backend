import { DataSource } from "typeorm";
import setDataSourceConfig from "../../../data-source";
import request from "supertest";
import app from "../../../app";
import { mockedComment } from "../../mocks/integration/comment.mock";


describe("/commments", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await setDataSourceConfig
      .initialize()
      .then((res) => {
        connection = res;
      })
      .catch((err) => {
        console.error("Erro durante a inicialização", err);
      });
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("POST /users - Comentário criado com sucesso", async () => {
    const response = await request(app).post("/comments").send(mockedComment);

    expect(response.body).toHaveProperty("content");
    expect(response.body.content).toEqual("Esse post me ajudou muito! Obrigado! :) ps. não me pagaram para falar isso!");
    expect(response.status).toBe(201);
  });

  })