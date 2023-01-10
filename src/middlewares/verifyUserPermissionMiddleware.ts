import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { appError } from "../errors/AppError";
import User from "../entities/user.entity";

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
      throw new appError("Id não encontrado", 404);
    }
    const findUserExist = await userRepository.findOneBy({
      id: Number(req.user.id),
      });
    
    if(findUser === findUserExist){
      return next();
    }  
    throw new appError("Unathorized", 401);
};

export default validationToken;
