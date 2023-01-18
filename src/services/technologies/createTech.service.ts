import AppDataSource from "../../data-source";
import User from "../../entities/users.entity";
import Technology from "../../entities/technologies.entity";
import {
  ITechRequest,
  ITechResponse,
} from "../../interfaces/technologies.interface";
import { techResponseSerializer } from "../../serializers/technologies.serializers";

const createTechService = async (
  data: ITechRequest,
  userId: string
): Promise<ITechResponse> => {
  const userRepository = AppDataSource.getRepository(User);
  const techRepository = AppDataSource.getRepository(Technology);

  const foundUser: User = await userRepository.findOneBy({
    id: parseInt(userId),
  });

  const createdTech = techRepository.create({ user: foundUser, ...data });
  await techRepository.save(createdTech);

  const validatedTech = await techResponseSerializer.validate(createdTech, {
    stripUnknown: true,
  });

  return validatedTech;
};

export default createTechService;
