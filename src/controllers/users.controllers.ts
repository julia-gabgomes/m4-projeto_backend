import { Request, Response } from "express";
import createUserService from "../services/users/createUser.service";
import listUserService from "../services/users/listUser.service";
import updateUserService from "../services/users/updateUser.service";
import deleteProductService from "../services/users/deleteUser.service";
import { IUserRequest } from "../interfaces/users.interface";
import listUserServices from "../services/users/listAllUser.service";
import listUserByIdService from "../services/users/listrUserById.service";

const createUserController = async (req: Request, res: Response) => {
  const userData: IUserRequest = req.body;
  const [status, newUser] = await createUserService(userData);
  return res.status(status as number).json(newUser);
};

const listUserController = async (req: Request, res: Response) => {
  const users = await listUserServices();
  return res.json(users);
};

const updateUsersController = async (req: Request, res: Response) => {
  const userData = req.body;
  const userId = req.user.id;
  const updatedUser = await updateUserService(userData, userId);
  return res.status(200).json(updatedUser);
};

const deleteUsersController = async (req: Request, res: Response) => {
  const id = req.user.id;
  const deletedUser = await deleteProductService(id);
  return res.status(204).json({});
};


const listUserByIdController = async (req: Request, res: Response) => {
  const id = req.params.id;
  const user = await listUserByIdService(id);
  return res.status(200).json(user);
};

export {
  listUserByIdController,
  createUserController,
  listUserController,
  updateUsersController,
  deleteUsersController,
};
