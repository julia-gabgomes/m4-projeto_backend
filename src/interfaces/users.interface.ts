export interface IUser {
  id: number;
  name: string;
  lastName: string;
  email: string;
  phone_number?: number;
  user_level: string;
  createdAt: Date;
  updatedAt: Date;
  softDeletedAt: Date;
}

export interface IUserRequest {
  name: string;
  lastName: string;
  email: string;
  password: string;
  phone_number: number;
  user_level: string;
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
  phone_number?: number;
  user_level?: string;
  updatedAt?: Date;
}

export interface IUserResponse {
  name: string;
  lastName: string;
  email: string;
  id: number;
  phone_number: number;
  user_level: string;
  createdAt: Date;
}
