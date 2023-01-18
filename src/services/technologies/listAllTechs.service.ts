import AppDataSource from "../../data-source";
import User from "../../entities/users.entity";
import { ITechResponse } from "../../interfaces/technologies.interface";
import { techListResponseSerializer } from "../../serializers/technologies.serializers";

const listUserTechsService = async (userId: string): Promise<ITechResponse> => {
  const foundUserTechs = await AppDataSource.getRepository(User)
    .createQueryBuilder("user")
    .innerJoinAndSelect("user.technologies", "technologies")
    .where("user.id = :id", { id: userId })
    .getOne();

  const validatedTechList = await techListResponseSerializer.validate(
    foundUserTechs,
    {
      stripUnknown: true,
    }
  );

  return validatedTechList;
};

export default listUserTechsService;
