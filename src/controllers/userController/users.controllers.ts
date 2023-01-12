import { Request, Response } from "express";
import createUserService from "../../services/users/createUser.service";
import { IUser, IUserRequest } from "../../interfaces/users.interface";

const createUserController = async (req: Request, res: Response) => {
  const userData: IUser = req.body;
  const [status, newUser] = await createUserService(userData);
  return res.status(status as number).json(newUser);
};


export {
  createUserController
};
