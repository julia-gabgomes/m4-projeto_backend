import AppDataSource from "../../data-source";
import User from "../../entities/users.entity";
import { ITechResponse } from "../../interfaces/technologies.interface";

const listUserTechsService = async (userId: string): Promise<ITechResponse> => {
  const foundUserTechs = await AppDataSource.getRepository(User)
    .createQueryBuilder("user")
    .innerJoinAndSelect("user.technologies", "technologies")
    .where("user.id = :id", { id: userId })
    .getOne();

  return foundUserTechs;
};

export default listUserTechsService;
