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

export { postSerializer, postUpdateSerializer };
