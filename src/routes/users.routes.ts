import { Router } from "express";
import { deleteUsersController, listUserByIdController, updateUsersController } from "../controllers/users.controllers";
import validationToken from "../middlewares/verifyAuthToken";

const userRouter = Router()









userRouter.delete('', validationToken, deleteUsersController)

userRouter.patch('', validationToken, updateUsersController)

userRouter.get('/:id', validationToken, listUserByIdController)

export default userRouter