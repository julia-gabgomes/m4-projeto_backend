import { Router } from "express";
import {
  createPostController,
// deletePostController,
// giveLikeForAPostController,
// listAllCommentsFromAPostController,
// listAllPostsController,
// listEspecificPostController,
// unLikePostController,
// updatePostController,
} from "../controllers/posts.controllers";


const postRoutes = Router();

postRoutes.post("", createPostController);
// postRoutes.get("", listAllPostsController);
// postRoutes.get("/<id>", listEspecificPostController);
// postRoutes.get("/<id>/comments", listAllCommentsFromAPostController);
// postRoutes.post("/<id>/likes", giveLikeForAPostController);
// postRoutes.patch("/<id>", updatePostController);
// postRoutes.delete("/<id>", deletePostController);
// postRoutes.delete("/<id>/likes", unLikePostController);
export default postRoutes;
