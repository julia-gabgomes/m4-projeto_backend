import { DataSource } from "typeorm";
import setDataSourceConfig from "../../../data-source";
import request from "supertest";
import app from "../../../app";
import { mockedComment } from "../../mocks/integration/comment.mock";
import {
  mockedLoginRequest,
  mockedUserRequest,
} from "../../mocks/integration/technology.mock";
import User from "../../../entities/users.entity";

describe("/comments", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await setDataSourceConfig
      .initialize()
      .then(async (res) => {
        connection = res;
        const userRepository = res.getRepository(User);
        const user = userRepository.create(mockedUserRequest);
        await userRepository.save(user);
      })
      .catch((err) => {
        console.error("Erro durante a inicialização", err);
      });
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("POST /comments - Comentário criado com sucesso", async () => {
    const loginUserResponse = await request(app)
      .post("/login")
      .send(mockedLoginRequest);

    const response = await request(app)
      .post(`/comments/${mockedComment.id}`)
      .set("Authorization", `Bearer ${loginUserResponse.body.token}`)
      .send(mockedComment);

    // const response = await request(app)
    //   .post(`/comments/${mockedComment.id}`)
    //   .send(mockedComment);

    expect(response.body).toHaveProperty("content");
    expect(response.body.content).toEqual(
      "Esse post me ajudou muito! Obrigado! :) ps. não me pagaram para falar isso!"
    );
    expect(response.status).toBe(201);
  });
});
