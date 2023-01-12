import * as yup from "yup";
import { SchemaOf } from "yup";
import { ITech } from "../interfaces/technologies.interface";

const technologieSerializer: SchemaOf<ITech> = yup.object().shape({
  id: yup.number().required(),
  name: yup.string().required(),
});

const technologieUpdateSerializer: SchemaOf<ITech> = yup.object().shape({
  id: yup.number().required(),
  name: yup.string().notRequired(),
});
