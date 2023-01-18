import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUserRequest, IUserResponse } from "../interfaces/users.interface";

const userSerializer: SchemaOf<IUserRequest> = yup.object().shape({
  name: yup.string().max(50).required(),
  lastName: yup.string().max(50).required(),
  email: yup.string().email().max(100).required(),
  password: yup
    .string()
    .matches(/(\d)/, "Must contain at least one number")
    .matches(/(\W)|_/, "Must contain at least one special character")
    .matches(/.{8,}/, "Must contain at least 8 characters")
    .required("Password is required"),
  phone_number: yup.string().max(20),
  level: yup.string().notRequired(),
});

const userWithoutPassSerializer: SchemaOf<IUserResponse> = yup.object().shape({
  name: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  id: yup.number().required(),
  phone_number: yup.string().nullable(),
  level: yup.string().required(),
  createdAt: yup.date().required(),
  updatedAt: yup.date().required(),
  isActive: yup.boolean(),
});

const userUpdateSerializer: SchemaOf<IUserRequest> = yup.object().shape({
  email: yup.string().email().notRequired(),
  name: yup.string().notRequired(),
  password: yup
    .string()
    .matches(/(\d)/, "Must contain at least one number")
    .matches(/(\W)|_/, "Must contain at least one special character")
    .matches(/.{8,}/, "Must contain at least 8 characters")
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
