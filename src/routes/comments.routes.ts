import { Router } from "express";
import {
  createCommentController,
  deleteCommentController,
  listAllCommentsController,
  updateCommentController,
} from "../controllers/comments.controllers";

const commentRouter = Router();

commentRouter.get("", listAllCommentsController);
commentRouter.post("", createCommentController);
commentRouter.patch("", updateCommentController);
commentRouter.delete("", deleteCommentController);

export default commentRouter;
