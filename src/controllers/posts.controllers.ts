import { Request, Response } from "express";
import createPostService from "../services/posts/createPost.service";
import deletePostService from "../services/posts/deletePost.service";
import listAllPostsService from "../services/posts/listAllPosts.service";
import updatePostService from "../services/posts/updatePost.service";
import { IPostRequest } from "../interfaces/posts.interface";
import unLikePostService from "../services/posts/unLikePost.service";
import giveLikeForAPostService from "../services/posts/giveLikeForAPost.service";
import listAllCommentsFromAPostService from "../services/posts/listAllCommentsFromAPost.service";
import listEspecificPostService from "../services/posts/listEspecificPost.service";

const createPostController = async (req: Request, res: Response) => {
  const postContent: IPostRequest = req.body;
  const newPost = await createPostService(postContent);

  return res.status(201).json(newPost);
};

//erros serão resolvidos após criaçao dos services
// const listAllPostsController = async (req: Request, res: Response) => {
//     const posts = await listAllPostsService();
//     return res.status(200).json(posts);
//   };
// const listEspecificPostController = async (req: Request, res: Response) => {
//     //controller esta incorreto, só fiz para fazer as rotas corretamente.
//     const posts = await listEspecificPostService();
//     return res.status(200).json(posts);
//   };

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

// const updatePostController = async (req: Request, res: Response) => {
//     const postContent = req.body;
//     const postId = req.params.id;

//     const updatedPost = await updatePostService(postContent, postId);

//     return res.status(200).json(updatedPost);
//   };

// const deletePostController = async (req: Request, res: Response) => {
//     const id = req.params.id;
//     const deletedPost = await deletePostService(id);
//     return res.status(204).json({});
//   };

// const unLikePostController = async (req: Request, res: Response) => {
//      //controller esta incorreto, só fiz para fazer as rotas corretamente.
//     const id = req.params.id;
//     const deletedPost = await unLikePostService(id);
//     return res.status(204).json({});
  // };

export {
  createPostController,
  // updatePostController,
  // listAllPostsController,
  // unLikePostController,
  // deletePostController,
  // giveLikeForAPostController,
  // listAllCommentsFromAPostController,
  // listEspecificPostController,
};
