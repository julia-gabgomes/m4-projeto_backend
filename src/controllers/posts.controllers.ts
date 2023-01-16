import { Request, Response } from "express";
import createPostService from "../services/posts/createPost.service";
import { IPostRequest } from "../interfaces/posts.interface";
import listAllPostsService from "../services/posts/listAllPosts.service";
import listPostByIdService from "../services/posts/listPostById.service";
import updatePostService from "../services/posts/updatePost.service";
import deletePostService from "../services/posts/deletePost.service";
import unLikePostService from "../services/posts/unLikePost.service";
import giveLikeForAPostService from "../services/posts/giveLikeForAPost.service";
import listAllCommentsFromAPostService from "../services/posts/listAllCommentsFromAPost.service";

const createPostController = async (req: Request, res: Response) => {
  const postContent: IPostRequest = req.body;
  const userId = req.user.id;
  const createdPost = await createPostService(postContent, userId);

  return res.status(201).json(createdPost);
};

const listAllPostsController = async (req: Request, res: Response) => {
  const posts = await listAllPostsService();

  return res.status(200).json(posts);
};

const listPostByIdController = async (req: Request, res: Response) => {
  const postId: string = req.params.id;
  const posts = await listPostByIdService(postId);

  return res.status(200).json(posts);
};

const updatePostController = async (req: Request, res: Response) => {
  const postContent = req.body;
  const postId = req.params.id;
  const userId = req.user.id;

  const updatedPost = await updatePostService(postContent, postId, userId);

  return res.status(200).json(updatedPost);
};

const deletePostController = async (req: Request, res: Response) => {
  const postId = req.params.id;
  const userId = req.user.id;
  await deletePostService(postId, userId);

  return res.sendStatus(204);
};

// const listAllCommentsFromAPostController = async (req: Request, res: Response) => {
//     //controller esta incorreto, só fiz para fazer as rotas corretamente.
//     const posts = await listAllCommentsFromAPostService();
//     return res.status(200).json(posts);
//   };

// const giveLikeForAPostController = async (req: Request, res: Response) => {
//      //controller esta incorreto, só fiz para fazer as rotas corretamente.
//     const postContent: IPostRequest = req.body;
//     const newPost = await giveLikeForAPostService(postContent);
//     return res.status(201).json(newPost);
//   };

// const unLikePostController = async (req: Request, res: Response) => {
//      //controller esta incorreto, só fiz para fazer as rotas corretamente.
//     const id = req.params.id;
//     const deletedPost = await unLikePostService(id);
//     return res.status(204).json({});
// };

export {
  createPostController,
  listAllPostsController,
  listPostByIdController,
  updatePostController,
  deletePostController,
  // unLikePostController,
  // giveLikeForAPostController,
  // listAllCommentsFromAPostController,
};
