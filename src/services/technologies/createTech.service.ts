import AppDataSource from "../../data-source";
import Technology from "../../entities/technologies.entity";
import {
  ITechRequest,
  ITechResponse,
} from "../../interfaces/technologies.interface";

const createTechService = async (
  data: ITechRequest
): Promise<ITechResponse> => {
  const techRepository = AppDataSource.getRepository(Technology);

  const createdTech = techRepository.create({ ...data });
  await techRepository.save(createdTech);

  return createdTech;
};

export default createTechService;
