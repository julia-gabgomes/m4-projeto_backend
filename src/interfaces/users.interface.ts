export interface IUserRequest {
  name: string;
  lastName: string;
  email: string;
  password: string;
  phone_number: string;
  level: string;
}
export interface IUserResponse {
  id: number;
  name: string;
  lastName: string;
  email: string;
  phone_number?: string;
  level: string;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserUpdate {
  name?: string;
  email?: string;
  lastName?: string;
  password?: string;
  phone_number?: string;
  level?: string;
  updatedAt?: Date;
  createdAt?: Date;
}

// export interface IUserResponse {
//   name: string;
//   lastName: string;
//   email: string;
//   id: number;
//   phone_number: string;
//   level: string;
//   createdAt: Date;
// }
