import { Router } from "express";
import {
  createCommentController,
  //   deleteCommentController,
  //   updateCommentController,
} from "../controllers/comments.controllers";

const commentRouter = Router();

commentRouter.post("/:id", createCommentController);
// commentRouter.patch("", updateCommentController);
// commentRouter.delete("", deleteCommentController);

export default commentRouter;
