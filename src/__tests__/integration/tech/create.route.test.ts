import { DataSource } from "typeorm";
import setDataSourceConfig from "../../../data-source";
import AppDataSource from "../../../data-source";
import request from "supertest";
import app from "../../../app";
import {
  mockedLoginRequest,
  mockedTechRequest,
  mockedUserRequest,
} from "../../mocks/integration/technology.mock";
import User from "../../../entities/users.entity";
import Technology from "../../../entities/technologies.entity";

describe("/technologies", () => {
  let connection: DataSource;
  const baseUrl: string = "/technologies";
  const techRepository = AppDataSource.getRepository(Technology);

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
        console.error("Error during Data Source initialization", err);
      });
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it("POST /technologies - Deve ser possível criar uma tecnologia", async () => {
    const loginUserResponse = await request(app)
      .post("/login")
      .send(mockedLoginRequest);

    const response = await request(app)
      .post(baseUrl)
      .set("Authorization", `Bearer ${loginUserResponse.body.token}`)
      .send(mockedTechRequest);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("name");
    expect(response.body).toHaveProperty("user");
    expect(response.body.user).toHaveProperty("id");
  });

  it("POST /technologies - Não deve ser possível criar uma tecnologia: token inválido", async () => {
    const response = await request(app).post(baseUrl).send(mockedTechRequest);

    expect(response.status).toBe(401);
    expect(response.body).toEqual({
      message: "Invalid token, not able to go any further",
    });
  });

  it("GET /technologies - Deve ser possível listar todas as tecnologias do usuário", async () => {
    const loginUserResponse = await request(app)
      .post("/login")
      .send(mockedLoginRequest);

    const response = await request(app)
      .post(baseUrl)
      .set("Authorization", `Bearer ${loginUserResponse.body.token}`)
      .send(mockedTechRequest);

    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("name");
  });

  it("GET /technologies - Não deve ser possível listar todas as tecnologias: token inválido", async () => {
    const response = await request(app).get(baseUrl).send(mockedTechRequest);

    expect(response.status).toBe(401);
    expect(response.body).toEqual({
      message: "Invalid token, not able to go any further",
    });
  });

  it("PATCH /technologies/</id> - Deve ser possível atualizar uma tecnologia", async () => {
    const loginUserResponse = await request(app)
      .post("/login")
      .send(mockedLoginRequest);

    const response = await request(app)
      .patch(baseUrl + "/1")
      .set("Authorization", `Bearer ${loginUserResponse.body.token}`)
      .send(mockedTechRequest);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("name");
    expect(response.body).toHaveProperty("user");
    expect(response.body.user).toHaveProperty("id");
  });

  it("PATCH /technologies/</id> - Não deve ser possível atualizar uma tecnologia: token inválido", async () => {
    const response = await request(app)
      .patch(baseUrl + "/1")
      .send(mockedTechRequest);

    expect(response.status).toBe(401);
    expect(response.body).toEqual({
      message: "Invalid token, not able to go any further",
    });
  });

  it("DELETE /technologies/</id> - Deve ser possível deletar uma tecnologia", async () => {
    const loginUserResponse = await request(app)
      .post("/login")
      .send(mockedLoginRequest);

    const response = await request(app)
      .delete(baseUrl + "/1")
      .set("Authorization", `Bearer ${loginUserResponse.body.token}`)
      .send(mockedTechRequest);

    expect(response.status).toBe(204);
    expect(response.body).toEqual({});
  });

  it("DELETE /technologies/</id> - Não deve ser possível deletar uma tecnologia: token inválido", async () => {
    const response = await request(app)
      .delete(baseUrl + "/1")
      .send(mockedTechRequest);

    expect(response.status).toBe(401);
    expect(response.body).toEqual({
      message: "Invalid token, not able to go any further",
    });
  });
});
