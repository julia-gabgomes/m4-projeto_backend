import AppDataSource from "../../data-source";
import Technology from "../../entities/technologies.entity";
import { AppError } from "../../errors/AppError";
import { ITechResponse } from "../../interfaces/technologies.interface";

const deleteTechService = async (id: string): Promise<Object> => {
  const TechRepository = AppDataSource.getRepository(Technology);

  const findTechnology: ITechResponse = await TechRepository.findOneBy({
    id: Number(id),
  });

  if (findTechnology == undefined) {
    throw new AppError("Technology does not exists", 400);
  }

  await TechRepository.delete(findTechnology);

  return {};
};

export default deleteTechService;
