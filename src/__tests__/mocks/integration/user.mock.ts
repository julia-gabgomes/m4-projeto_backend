import { IUserLogin,IUserRequest, IUserUpdate } from "../../../interfaces/users.interface";


export const mockedUser1 : IUserRequest = {
    name: "Julia",
    lastName: "De Paula",
    email: "juliadepaula@gmail.com",
    password: "#Lk090890",
    phone_number: "4799656282",
    level: "junior"
}

export const mockedUser2 : IUserRequest = {
    name: "Fernanda",
    lastName: "Carrolo",
    email: "Fernanda@gmail.com",
    password: "#Lk090890",
    phone_number: "1159596596",
    level: "Senior"
}

export const mockedUserLogin1 : IUserLogin = {
    email: "juliadepaula@gmail.com",
    password: "#Lk090890"
}

export const mockedUserLogin2 : IUserLogin = {
    email: "Fernanda@gmail.com",
    password: "#Lk090890"
}

export const iUserUpdate : IUserUpdate = {
    name: "patricia",
    lastName: "De Paula",
    email: "patricia@gmail.com",
    password: "#Lk090890"
}
