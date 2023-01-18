import * as yup from "yup";
import { SchemaOf } from "yup";
import { ITechRequest } from "../interfaces/technologies.interface";
import { userWithoutPassSerializer } from "./users.serializers";

const techRequestSerializer: SchemaOf<ITechRequest> = yup.object().shape({
  name: yup.string().required(),
});

const techResponseSerializer = yup.object().shape({
  id: yup.number().required(),
  name: yup.string().required(),
  user: yup.object({
    name: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    id: yup.number().required(),
    phone_number: yup.string().nullable(),
    level: yup.string().required(),
    createdAt: yup.date().required(),
    updatedAt: yup.date().required(),
    isActive: yup.boolean(),
  }),
});

const techSerializer = yup.object().shape({
  id: yup.number().required(),
  name: yup.string().required(),
});

const techListResponseSerializer = yup.object().shape({
  name: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  id: yup.number().required(),
  phone_number: yup.string().nullable(),
  level: yup.string().required(),
  createdAt: yup.date().required(),
  updatedAt: yup.date().required(),
  isActive: yup.boolean(),
  technologies: yup.array(techSerializer),
});

export {
  techRequestSerializer,
  techResponseSerializer,
  techListResponseSerializer,
};
