import { Router } from "express";
import { createUserController, deleteUsersController, listUserByIdController, listUserController, updateUsersController } from "../controllers/users.controllers";
import validationToken from "../middlewares/verifyAuthToken";
import verifyEmailExist from "../middlewares/verifyEmailExists.middleware";


const userRouter = Router()

userRouter.delete('', validationToken, deleteUsersController)
userRouter.patch('', validationToken, verifyEmailExist, updateUsersController)
userRouter.get('/:id', validationToken, listUserByIdController)
userRouter.post('', createUserController);
userRouter.get('', validationToken, listUserController);

export default userRouter;
