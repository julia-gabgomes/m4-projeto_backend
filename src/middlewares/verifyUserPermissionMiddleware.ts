import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { AppError } from "../errors/AppError";
import User from "../entities/users.entity";

const validationToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({
    id: Number(req.params.id),
  });
  if (!findUser) {
    throw new AppError("Id não encontrado", 404);
  }
  const findUserExist = await userRepository.findOneBy({
    id: Number(req.user.id),
  });

  if (findUser === findUserExist) {
    return next();
  }
  throw new AppError("Unathorized", 401);
};

export default validationToken;
