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
import ensureUserIdMiddleware from "../middlewares/ensureUserId.middleware";
import ensureUserIsActive from "../middlewares/ensureUserIsActive.middleware";


const userRoutes = Router();

userRoutes.post(
  "",
  verifyEmailExists,
  createUserController
);
userRoutes.get("", validateTokenMiddleware, listAllUsersController);
userRoutes.get(
  "/:id",
  validateTokenMiddleware,
  ensureUserIdMiddleware,
  listUserByIdController
);
userRoutes.patch(
  "",
  validateTokenMiddleware,
  ensureUserIsActive,
  updateUserController
);
userRoutes.delete(
  "",
  validateTokenMiddleware,
  ensureUserIsActive,
  deleteUserController
);

export default userRoutes;
