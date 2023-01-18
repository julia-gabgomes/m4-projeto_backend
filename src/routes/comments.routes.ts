import { Router } from "express";
import {
  createCommentController
} from "../controllers/comments.controllers";

const commentRouter = Router();

commentRouter.post("/:id", createCommentController);

export default commentRouter;
