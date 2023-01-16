import { DataSource } from "typeorm";
import AppDataSource from "../../../data-source";
import request from "supertest"
import app from "../../../app";
import { mockedUser, mockedUserLogin} from "../../mocks/integration/user.mock"


describe("/login", () => {
    let connection: DataSource

    beforeAll(async() => {
        await AppDataSource.initialize().then((res) => {
            connection = res
        }).catch((err) => {
            console.error("Erro durante a inicialização", err)
        })

        await request(app).post('/users').send(mockedUserLogin)
    })

    afterAll(async() => {
        await connection.destroy()
    })

    test("POST /login -  você pode fazer login com sucesso",async () => {
        const response = await request(app).post("/login").send(mockedUser);
        
        expect(response.body).toHaveProperty("token")
        expect(response.status).toBe(200)
     
    })

    test("POST /login -  você não pode fazer login com email ou senha inválidos",async () => {
        const response = await request(app).post("/login").send({
            email: "bryancaua@gmail.geam",
            password: "#LmJk234"
        });

        expect(response.body).toHaveProperty("message")
        expect(response.status).toBe(403)
             
    })
})