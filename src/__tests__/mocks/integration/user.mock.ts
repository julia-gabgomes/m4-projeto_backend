import { IUserLogin,IUserRequest } from "../../../interfaces/users.interface";


export const mockedUser : IUserRequest = {
    name: "Julia",
    lastName: "De Paula",
    email: "juliadepaula@gmail.com",
    password: "123456",
    phone_number: "4799656282",
    level: "junior"
}

export const mockedUserLogin : IUserLogin = {
    email: "juliadepaula@gmail.com",
    password: "123456"
}

