import { Router } from "express";
import validateTokenMiddleware from "../middlewares/validateToken.middleware";
import {
  createTechController,
  deleteTechController,
  listUserTechsController,
  updateTechController,
} from "../controllers/technologies.controller";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import { techRequestSerializer } from "../serializers/technologies.serializers";

const techRoutes = Router();

techRoutes.post(
  "",
  validateTokenMiddleware,
  ensureDataIsValidMiddleware(techRequestSerializer),
  createTechController
);

techRoutes.get("", validateTokenMiddleware, listUserTechsController);

techRoutes.patch(
  "/:id",
  validateTokenMiddleware,
  ensureDataIsValidMiddleware(techRequestSerializer),
  updateTechController
);

techRoutes.delete("/:id", validateTokenMiddleware, deleteTechController);

export default techRoutes;
