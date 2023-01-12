import { Router } from "express";

const commentRouter = Router()

commentRouter.get('', listAllCommentsController)
commentRouter.post('', postCommentController)
commentRouter.patch('', updateCommentController)
commentRouter.delete('', deleteCommentController)

export default commentRouter