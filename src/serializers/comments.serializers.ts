import * as yup from "yup";
import { SchemaOf } from "yup";
import { IComments } from "../interfaces/comments.interface";

const commentSerializer: SchemaOf<IComments> = yup.object().shape({
  id: yup.number().required(),
  content: yup.string().required(),
});

const commentUpdateSerializer: SchemaOf<IComments> = yup.object().shape({
  id: yup.number().required(),
  content: yup.string().notRequired(),
});

export { commentSerializer, commentUpdateSerializer };
