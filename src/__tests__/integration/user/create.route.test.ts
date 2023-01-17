import { DataSource } from "typeorm";
import setDataSourceConfig from "../../../data-source";
import request from "supertest";
import app from "../../../app";
import { iUserUpdate, mockedUser1, mockedUser2, mockedUserLogin1, mockedUserLogin2 } from "../../mocks/integration/user.mock";

describe("/users", () => {
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

  test("POST /users - Usuario criado com sucesso", async () => {
    const response = await request(app).post("/users").send(mockedUser1);

    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("name");
    expect(response.body).toHaveProperty("email");
    expect(response.body).toHaveProperty("isActive");
    expect(response.body).toHaveProperty("createdAt");
    expect(response.body).toHaveProperty("updatedAt");
    expect(response.body).not.toHaveProperty("password");
    expect(response.body.name).toEqual("Julia");
    expect(response.body.lastName).toEqual("De Paula");
    expect(response.body.email).toEqual("juliadepaula@gmail.com");
    expect(response.body.isActive).toEqual(true);
    expect(response.status).toBe(201);
  });

  test("POST /users -  Você não pode criar um usuario existente", async () => {
    const response = await request(app).post("/users").send(mockedUser1);
    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(409);
  });

  test("GET /users -  Você pode listar usuarios", async () => {
    await request(app).post("/users").send(mockedUser1);
    const adminLoginResponse = await request(app)
      .post("/login")
      .send(mockedUser1);
    const response = await request(app)
      .get("/users")
      .set("Authorization", `Bearer ${adminLoginResponse.body.token}`);
    expect(response.body).toHaveLength(1);
    expect(response.body[0]).not.toHaveProperty("password");
  });

  test("GET /users -  Não pode listar usuarios sem um token", async () => {
    const response = await request(app).get("/users");
    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
});

  test("PATCH /users - Você pode fazer uma atualização de usuario", async () => {
    const attempt = await request(app).post(`/login`).send(mockedUserLogin1)
    const response = await request(app).patch(`/users`).set('Authorization', `Bearer ${attempt.body.token}`).send(iUserUpdate)
    expect(response.status).toBe(200)
});
    
  test("DELETE /users - Você pode fazer o soft-delete", async () => {
    const resgiter = await request(app).post(`/users`).send(mockedUser2)
    const attempt = await request(app).post(`/login`).send(mockedUserLogin2)
    const response = await request(app).delete(`/users`).set('Authorization', `Bearer ${attempt.body.token}`)
    // const authorization = await request(app).get(`/users`).set('Authorization', `Bearer ${attempt.body.token}`)
    // expect(authorization).not.toHaveProperty('id')
    expect(response.status).toBe(204)
  })

  })

