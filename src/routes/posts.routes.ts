import { Router } from "express";
import { createPostController, deletePostController, giveLikeForAPostController, listAllCommentsFromAPostController, listAllPostsController, listEspecificPostController, unLikePostController, updatePostController } from "../controllers/posts.controllers";

const postRouter = Router()


postRouter.get('', listAllPostsController)
postRouter.get('/<id>', listEspecificPostController)
postRouter.get('/<id>/comments', listAllCommentsFromAPostController)
postRouter.post('', createPostController)
postRouter.post('/<id>/likes', giveLikeForAPostController)
postRouter.patch('/<id>', updatePostController)
postRouter.delete('/<id>', deletePostController)
postRouter.delete('/<id>/likes', unLikePostController)
export default postRouter