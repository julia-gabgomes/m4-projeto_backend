import * as yup from "yup";
import { SchemaOf } from "yup";
import { ITechResponseRequest } from "../interfaces/technologies.interface";

const techRequestSerializer: SchemaOf<ITechResponseRequest> = yup
  .object()
  .shape({
    name: yup.string().max(50).required(),
  });

export { techRequestSerializer };
