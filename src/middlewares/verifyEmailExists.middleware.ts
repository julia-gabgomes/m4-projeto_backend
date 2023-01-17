import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import User from "../entities/users.entity";
import { AppError } from "../errors/AppError";

const verifyEmailExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepository = AppDataSource.getRepository(User);

  const validationEmail = await userRepository.findOneBy({
    email: req.body.email,
  });

  if (validationEmail) {
    throw new AppError("This email already exists", 409);
  }

  next();
};

export default verifyEmailExists;
