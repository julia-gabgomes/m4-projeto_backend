import { Router } from "express";
import validateTokenMiddleware from "../middlewares/validateToken.middleware";
import {
  createTechController,
  deleteTechnologyController,
  listUserTechsController,
  updateTechnologyController,
} from "../controllers/technologies.controller";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import techRequestSerializer from "../serializers/technologies.serializers";

const technologiesRoutes = Router();

technologiesRoutes.post(
  "",
  validateTokenMiddleware,
  ensureDataIsValidMiddleware(techRequestSerializer),
  createTechController
);

technologiesRoutes.get("", validateTokenMiddleware, listUserTechsController);

technologiesRoutes.patch(
  "/:id",
  validateTokenMiddleware,
  ensureDataIsValidMiddleware(techRequestSerializer),
  updateTechnologyController
);

technologiesRoutes.delete(
  "/:id",
  validateTokenMiddleware,
  deleteTechnologyController
);

export default technologiesRoutes;
