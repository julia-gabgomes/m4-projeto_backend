import { Request, Response } from "express";
import { IUserRequest } from "../interfaces/users.interface";
import createUserService from "../services/users/createUser.service";
import updateUserService from "../services/users/updateUser.service";
import listAllUsersService from "../services/users/listAllUsers.service";
import listUserByIdService from "../services/users/listUserById.service";
import deleteUserService from "../services/users/deleteUser.service";

const createUserController = async (req: Request, res: Response) => {
  const userData: IUserRequest = req.body;
  const newUser = await createUserService(userData);

  return res.status(201).json(newUser);
};

const listAllUsersController = async (req: Request, res: Response) => {
  const users = await listAllUsersService();

  return res.json(users);
};

const listUserByIdController = async (req: Request, res: Response) => {
  const id = req.params.id;
  const user = await listUserByIdService(id);

  return res.status(200).json(user);
};

const updateUserController = async (req: Request, res: Response) => {
  const userData = req.body;
  const userId = req.user.id;
  const updatedUser = await updateUserService(userData, userId);

  return res.status(200).json(updatedUser);
};

const deleteUserController = async (req: Request, res: Response) => {
  const id = req.user.id;

  await deleteUserService(id);
  return res.sendStatus(204);
};

export {
  createUserController,
  listAllUsersController,
  listUserByIdController,
  updateUserController,
  deleteUserController,
};
