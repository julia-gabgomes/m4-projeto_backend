import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import User from "../entities/users.entity";

const ensureUserIsActive = async (req: Request, res: Response, next: NextFunction) => {

    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy(
        {
            id: Number(req.user.id)
        }
    )

    if(!user.isActive){
        return res.status(400).json({message: "This user is no longer active"})
    }

    return next()
}

export default ensureUserIsActive