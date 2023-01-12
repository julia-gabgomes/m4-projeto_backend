import * as yup from "yup";
import { SchemaOf } from "yup";
import { IPostRequest } from "../interfaces/posts.interface";

const postSerializer: SchemaOf<IPostRequest> = yup.object().shape({
  id: yup.string(),
  title: yup.string().required(),
  content: yup.string().required(),
  likes: yup.number().required(),
  type: yup.string().required(),
});

const postUpdateSerializer: SchemaOf<IPostRequest> = yup.object().shape({
  id: yup.string(),
  title: yup.string().notRequired(),
  content: yup.string().notRequired(),
  likes: yup.number().notRequired(),
  type: yup.string().notRequired(),
});

export { postSerializer, postUpdateSerializer };
