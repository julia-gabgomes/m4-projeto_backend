import { DeepPartial } from "typeorm";
import dataSource from "../../data-source";
import AppDataSource from "../../data-source";
import Technology from "../../entities/technologies.entity";
import User from "../../entities/users.entity";
import { AppError } from "../../errors/AppError";
import { ITechRequest } from "../../interfaces/technologies.interface";

const updateTechnologyService = async (
  techData: ITechRequest,
  techId: string
) => {
  if (Object.keys(techData).length === 0) {
    throw new AppError("Fields are not able to update", 401);
  }

  const techRepository = AppDataSource.getRepository(Technology);

  const findTechnology = await techRepository.find({
    where: { id: parseInt(techId) },
    relations: { user: true },
  });

  if (findTechnology.length < 1) {
    throw new AppError("Technology does not exists", 400);
  }

  findTechnology[0].name = techData.name;
  await techRepository.save(findTechnology);

  return findTechnology[0];
};

export default updateTechnologyService;
