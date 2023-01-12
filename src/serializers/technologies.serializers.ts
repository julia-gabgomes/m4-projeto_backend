import * as yup from "yup";
import { SchemaOf } from "yup";
import { ITechRequest } from "../interfaces/technologies.interface";

const techRequestSerializer: SchemaOf<ITechRequest> = yup.object().shape({
  name: yup.string().required(),
});

export default techRequestSerializer;
