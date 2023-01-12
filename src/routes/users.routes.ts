import { Router } from "express";
import { createUserController, deleteUsersController, listUserByIdController, listUserController, updateUsersController } from "../controllers/users.controllers";
import validateTokenMiddleware from "../middlewares/validateToken.middleware";
import verifyEmailExist from "../middlewares/verifyEmailExists.middleware";


const userRouter = Router()

userRouter.delete('', validateTokenMiddleware, deleteUsersController)
userRouter.patch('', validateTokenMiddleware, verifyEmailExist, updateUsersController)
userRouter.get('/:id', validateTokenMiddleware, listUserByIdController)
userRouter.post('', createUserController);
userRouter.get('', validateTokenMiddleware, listUserController);

export default userRouter;
