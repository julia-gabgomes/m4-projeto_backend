import AppDataSource from "../../data-source";
import Technology from "../../entities/technologies.entity";
import { AppError } from "../../errors/AppError";
import { ITechRequest } from "../../interfaces/technologies.interface";

const updateTechnologyService = async (userData: ITechRequest, id: string) => {

  if (Object.keys(userData).length === 0) {
    throw new AppError("Fields are not able to update", 401);
  }

  const TechRepository = AppDataSource.getRepository(Technology);

  const findTechnology = await TechRepository.findOneBy({
    id: Number(id),
  });

  if (findTechnology == undefined) {
    throw new AppError("Technology does not exists", 400);
  }

  const updatedTech = TechRepository.create({
    ...findTechnology,
    ...userData,
  });

  await TechRepository.save(updatedTech);

  return updatedTech;
};

export default updateTechnologyService;
