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
    throw new AppError("Id not found", 404);
  }
  const findIfUserExists = await userRepository.findOneBy({
    id: Number(req.user.id),
  });

  if (findUser === findIfUserExists) {
    return next();
  }
  throw new AppError("Unauthorized", 401);
};

export default validationToken;
