import { Router } from "express";
import {
  createUserController,
  listAllUsersController,
  listUserByIdController,
  updateUserController,
  deleteUserController,
} from "../controllers/users.controllers";
import validateTokenMiddleware from "../middlewares/validateToken.middleware";
import verifyEmailExists from "../middlewares/verifyEmailExists.middleware";

const userRoutes = Router();

userRoutes.post("", verifyEmailExists, createUserController);
userRoutes.get("", validateTokenMiddleware, listAllUsersController);
userRoutes.get("/:id", validateTokenMiddleware, listUserByIdController);
userRoutes.patch(
  "",
  validateTokenMiddleware,
  verifyEmailExists,
  updateUserController
);
userRoutes.delete("", validateTokenMiddleware, deleteUserController);

export default userRoutes;
