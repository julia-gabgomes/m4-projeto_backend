import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  IUserRequest,
  IUserResponse,
  IUserUpdate,
} from "../interfaces/users.interface";

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
  phone_number: yup.number(),
  user_level: yup.string().required(),
});

const userWithoutPasswordSerializer: SchemaOf<IUserResponse> = yup
  .object()
  .shape({
    name: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    id: yup.number().required(),
    phone_number: yup.number().notRequired(),
    user_level: yup.string().required(),
    createdAt: yup.date().required(),
  });

const userUpdateSerializer: SchemaOf<IUserUpdate> = yup.object().shape({
  email: yup.string().email().notRequired(),
  name: yup.string().notRequired(),
  password: yup
    .string()
    .matches(/(\d)/, "Deve conter ao menos um número")
    .matches(/(\W)|_/, "Deve conter um caracter especial")
    .matches(/.{8,}/, "Deve ter no minimo 8 digitos")
    .required("A senha é obrigatória"),
  lastName: yup.string().notRequired(),
  phone_number: yup.number().notRequired(),
  user_level: yup.string().notRequired(),
  updatedAt: yup.date().notRequired(),
});

export { userSerializer, userWithoutPasswordSerializer, userUpdateSerializer };
