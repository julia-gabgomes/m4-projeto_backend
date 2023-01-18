import * as yup from "yup";
import { SchemaOf } from "yup";
import { IComments } from "../interfaces/comments.interface";

const commentRequestSerializer = yup.object().shape({
  content: yup.string().max(300).required(),
});

const commentSerializer: SchemaOf<IComments> = yup.object().shape({
  id: yup.number().required(),
  content: yup.string().required(),
});

export { commentSerializer, commentRequestSerializer };
