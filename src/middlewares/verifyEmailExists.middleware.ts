import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { appError } from "../errors/AppError";

const verifyEmailExist = async (  
    req: Request,
    res: Response,
    next: NextFunction
    ) => {
        
    const userRepository = AppDataSource.getRepository(User);
    const validationEmail = await userRepository.findOneBy({
      email: userData.email,
    });
    if (validationEmail) {
      throw new appError("Email already exist", 409);
    }
    return next();
  };
  
  export default verifyEmailExist;