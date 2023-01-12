import { Request, Response } from "express";
import { IComments } from "../interfaces/comments.interface";
import createCommentService from "../services/comments/createComment.service";
import deleteCommentService from "../services/comments/deleteComment.service";
import listAllCommentsService from "../services/comments/listAllComments.service";
import updateCommentService from "../services/comments/updateComment.service";

const listAllCommentsController = async (req: Request, res: Response) => {
  const data = await listAllCommentsService();
  return res.status(200).json(data);
};

const createCommentController = async (req: Request, res: Response) => {
  const data: IComments = req.body;
  const newUser = await createCommentService(data);
  return res.status(201).json(newUser);
};

const updateCommentController = async (req: Request, res: Response) => {
  const data = req.body;
  const id = req.params.id;

  const updatedComment = await updateCommentService(data, id);

  return res.status(200).json(updatedComment);
};

const deleteCommentController = async (req: Request, res: Response) => {
  const id = req.params.id;
  await deleteCommentService(id);
  return res.status(204).json({});
};

export {
  listAllCommentsController,
  createCommentController,
  updateCommentController,
  deleteCommentController,
};
