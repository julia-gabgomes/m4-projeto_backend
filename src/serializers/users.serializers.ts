import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUserRequest, IUserResponse } from "../interfaces/users.interface";

const userSerializer: SchemaOf<IUserRequest> = yup.object().shape({
  email: yup.string().email().required(),
  name: yup.string().required(),
  password: yup
    .string()
    .matches(/(\d)/, "Deve conter ao menos um número")
    .matches(/(\W)|_/, "Deve conter um caracter especial")
    .matches(/.{8,}/, "Deve ter no minimo 8 digitos")
    .required("A senha é obrigatória"),
  lastName: yup.string().required(),
  phone_number: yup.string(),
  level: yup.string().required(),
});

const userWithoutPassSerializer: SchemaOf<IUserResponse> = yup.object().shape({
  name: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  id: yup.number().required(),
  phone_number: yup.string().notRequired(),
  level: yup.string().notRequired(),
  createdAt: yup.date().required(),
  updatedAt: yup.date().required(),
  isActive: yup.boolean(),
});

const userUpdateSerializer: SchemaOf<IUserRequest> = yup.object().shape({
  email: yup.string().email().notRequired(),
  name: yup.string().notRequired(),
  password: yup
    .string()
    .matches(/(\d)/, "Deve conter ao menos um número")
    .matches(/(\W)|_/, "Deve conter um caracter especial")
    .matches(/.{8,}/, "Deve ter no minimo 8 digitos")
    .notRequired(),
  lastName: yup.string().notRequired(),
  phone_number: yup.string().notRequired(),
  level: yup.string().notRequired(),
});

const usersListWithoutPassSerializer = yup.array(userWithoutPassSerializer);

export {
  userSerializer,
  userWithoutPassSerializer,
  usersListWithoutPassSerializer,
  userUpdateSerializer,
};
