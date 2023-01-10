import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import User from "../entities/user.entity";
import { appError } from "../errors/AppError";


const verifyEmailExist = async (  
    req: Request,
    res: Response,
    next: NextFunction
    ) => {
        
    const userRepository = AppDataSource.getRepository(User);
    const validationEmail = await userRepository.findOneBy({
      email: req.params.email,
    });
    if (validationEmail) {
      throw new appError("Email already exist", 409);
    }
    return next();
  };
  
  export default verifyEmailExist;