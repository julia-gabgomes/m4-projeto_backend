import AppDataSource from "../../data-source";
import Technology from "../../entities/technologies.entity";
import { ITechResponse } from "../../interfaces/technologies.interface";

const listAllTechsService = async (): Promise<ITechResponse[]> => {
  const techRepository = AppDataSource.getRepository(Technology);

  const techList = techRepository.find();

  return techList;
};

export default listAllTechsService;
