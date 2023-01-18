import * as yup from "yup";
import { SchemaOf } from "yup";
import { IPostRequest } from "../interfaces/posts.interface";

const postSerializer: SchemaOf<IPostRequest> = yup.object().shape({
  title: yup.string().max(120).required(),
  content: yup.string().max(1000).required(),
  type: yup.string().required(),
});

const postUpdateSerializer: SchemaOf<IPostRequest> = yup.object().shape({
  title: yup.string().max(120).notRequired(),
  content: yup.string().max(1000).notRequired(),
  type: yup.string().notRequired(),
});

const postResponseSerializer = yup.object().shape({
  id: yup.number().required(),
  title: yup.string().max(120).required(),
  content: yup.string().max(1000).required(),
  type: yup.string().required(),
  createdAt: yup.date().required(),
  updatedAt: yup.date().required(),
  deletedAt: yup.date().nullable(),
  user: yup.object().shape({
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

const postListResponseSerializer = yup.array(postResponseSerializer);

export {
  postSerializer,
  postUpdateSerializer,
  postResponseSerializer,
  postListResponseSerializer,
};
