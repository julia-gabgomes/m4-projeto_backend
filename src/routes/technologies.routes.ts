import { Router } from "express";
import validateTokenMiddleware from "../middlewares/validateToken.middleware";
import {
  createTechController,
  deleteTechnologyController,
  listAllTechsController,
  updateTechnologyController,
} from "../controllers/technologies.controller";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import { techRequestSerializer } from "../schemas/technologies.serializers";

const technologiesRoutes = Router();

technologiesRoutes.post(
  "",
  ensureDataIsValidMiddleware(techRequestSerializer),
  createTechController
);

technologiesRoutes.get("", listAllTechsController);

technologiesRoutes.patch("/:id", updateTechnologyController);

technologiesRoutes.delete("/:id", deleteTechnologyController);

export default technologiesRoutes;
