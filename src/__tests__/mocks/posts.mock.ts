import { IPostRequest } from '../../interfaces/posts.interface'
import { IUserLogin, IUserRequest } from '../../interfaces/users.interface'

export const mockedPostRequest: IPostRequest = {
    title: 'Tenho duvida',
    content: 'Minha duvida é ...',
    type: "Dúvida"
}

export const mockedPOstUpdated: IPostRequest = {
    title: 'Tenho uma duvida',
    content: 'Minha duvida é o seguinte ...',
    type: "Dúvida"
}


export const mockedUserRequest: IUserRequest = {
    name: 'Matheus',
    lastName: 'Rocha',
    email: 'matheus@dev.com',
    password: 'Senha123@',
    phone_number: '11 9999-9999',
    level: 'Junior',
}

export const mockedLoginRequest: IUserLogin = {
    email: 'matheus@dev.com',
    password: 'Senha123@'
}