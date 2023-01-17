import { Request, Response } from "express";
import { IComments } from "../interfaces/comments.interface";
import createCommentService from "../services/comments/createComment.service";

const createCommentController = async (req: Request, res: Response) => {
  const data: IComments = req.body;
  const postId: string = req.params.id;
  const newComment = await createCommentService(data, postId);

  return res.status(201).json(newComment);
};

export {
  createCommentController
};
