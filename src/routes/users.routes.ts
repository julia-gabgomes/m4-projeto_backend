import { Router } from "express";
import { listUserController } from "../controllers/userController/listAllUser.controller";
import { createUserController } from "../controllers/userController/users.controllers";
import validationToken from "../middlewares/verifyAuthToken";


const userRoutes = Router();
userRoutes.post("", createUserController);
userRoutes.get("", validationToken, listUserController);

export default userRoutes;
