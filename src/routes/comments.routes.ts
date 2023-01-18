import { Router } from "express";
import { createCommentController } from "../controllers/comments.controllers";
import validateTokenMiddleware from "../middlewares/validateToken.middleware";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import { commentRequestSerializer } from "../serializers/comments.serializers";

const commentRouter = Router();

commentRouter.post(
  "/:id",
  validateTokenMiddleware,
  ensureDataIsValidMiddleware(commentRequestSerializer),
  createCommentController
);

export default commentRouter;
