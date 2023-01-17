import request from 'supertest'
import { DataSource } from 'typeorm'
import app from '../../../app'
import Post from '../../../entities/posts.entity'
import AppDataSource from '../../../data-source'
import { mockedPostRequest, mockedUserRequest, mockedLoginRequest, mockedPOstUpdated } from '../../mocks/posts.mock'

describe("Criação de posts", () => {
    let connection: DataSource
    const baseURL: string = '/posts'
    const postRepository = AppDataSource.getRepository(Post);

    beforeAll(async () => {
        await AppDataSource.initialize()
        .then((res) => (connection = res))
        .catch((err) => console.error(err));

        await request(app).post('/users').send(mockedUserRequest);
    });

    afterAll(async() => {
        await connection.destroy()
    })

    test('POST /posts - Deve ser possivel criar um post ', async () => {
        const user = await request(app).post('/login').send(mockedLoginRequest);
        const response = await request(app).post(baseURL).set('Authorization', `Bearer ${user.body.token}`).send(mockedPostRequest);
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('title')
        expect(response.body).toHaveProperty('id')
        // expect(response.body.user).not.toHaveProperty('password')
    });

    test('POST /posts - Não deve ser possivel criar um post sem autenticação ', async () => {
        const response = await request(app).post(baseURL).send(mockedPostRequest);
        expect(response.status).toBe(401);
    });

    test('GET /posts - Deve ser possivel listar todos os posts', async () => {
        const user = await request(app).post('/login').send(mockedLoginRequest);
        const response = await request(app).get(baseURL).set('Authorization', `Bearer ${user.body.token}`)
        expect(response.status).toBe(200);
        expect(response.body[0]).toHaveProperty('id')
        expect(response.body[0]).toHaveProperty('title')
    })

    test('GET /posts - Não deve ser possivel listar todos os posts sem autenticação', async () => {
        const response = await request(app).get(baseURL);
        expect(response.status).toBe(401);
    })

    test('GET /posts/:id - Deve ser possivel listar um post por id', async () => {
        const user = await request(app).post('/login').send(mockedLoginRequest);
        const response = await request(app).get(`/posts/1`).set('Authorization', `Bearer ${user.body.token}`)
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('id');
        expect(response.body).toHaveProperty('title');
    })

    test('GET /posts/:id - Não Deve ser possivel listar um post por id sem autenticação', async () => {
        const response = await request(app).get(`/posts/1`)
        expect(response.status).toBe(401);
    })

    test('GET /posts/:id - Não deve ser possivel listar um post por id com um id invalido', async () => {
        const user = await request(app).post('/login').send(mockedLoginRequest);
        const response = await request(app).get(`/posts/10`).set('Authorization', `Bearer ${user.body.token}`)
        expect(response.status).toBe(404);
        expect(response.body.message).toBe('Invalid post id')
    })

    test('PATCH /posts/:id - Deve ser possivel atualizar um post', async () => {
        const user = await request(app).post('/login').send(mockedLoginRequest);
        const response = await request(app).patch(`/posts/1`).set('Authorization', `Bearer ${user.body.token}`).send(mockedPOstUpdated)
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('id');
        expect(response.body.title).toBe(mockedPOstUpdated.title);
    })

    test('PATCH /posts/:id - Não deve ser possivel atualizar um post sem autenticação', async () => {
        const response = await request(app).patch(`/posts/1`).send(mockedPOstUpdated)
        expect(response.status).toBe(401);
    })

    test('PATCH /posts/:id - Não deve ser possivel atualizar um post com id invalido', async () => {
        const user = await request(app).post('/login').send(mockedLoginRequest);
        const response = await request(app).patch(`/posts/2`).set('Authorization', `Bearer ${user.body.token}`).send(mockedPOstUpdated)
        expect(response.status).toBe(404);
        expect(response.body.message).toBe('Invalid post id');
    })

    test('DELETE /posts/:id - Deve ser possivel deletar um post', async () => {
        const user = await request(app).post(`/login`).send(mockedLoginRequest);
        const response = await request(app).delete(`/posts/1`).set('Authorization', `Bearer ${user.body.token}`);
        expect(response.status).toBe(204)
    })

    test('DELETE /posts/:id - Não deve ser possivel deletar um post sem autenticação', async () => {
        const response = await request(app).delete(`/posts/1`);
        expect(response.status).toBe(401)
    })

    test('DELETE /posts/:id - Não deve ser possivel deletar um post com id invalido', async () => {
        const user = await request(app).post(`/login`).send(mockedLoginRequest);
        const response = await request(app).delete(`/posts/2`).set('Authorization', `Bearer ${user.body.token}`);
        expect(response.status).toBe(400)
        expect(response.body.message).toBe('Post does not exists');
    })
})