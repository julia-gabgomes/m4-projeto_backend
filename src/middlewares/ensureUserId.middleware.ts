import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import User from "../entities/users.entity";

const ensureUserIdMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    if(isNaN(Number(req.params.id))){
        return res.status(404).json({message: "invalid id"})
    }

    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy(
        {
            id: Number(req.params.id)
        }
    )

    if(!user){
        return res.status(404).json({message: "User not found"})
    }

    return next()
}

export default ensureUserIdMiddleware