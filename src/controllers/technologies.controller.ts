import { Request, Response } from "express";
import { ITechRequest } from "../interfaces/technologies.interface";
import createTechService from "../services/technologies/createTech.service";
import deleteTechnologyService from "../services/technologies/deleteTechnology.service";
import listAllTechsService from "../services/technologies/listAllTechs.service";
import updateTechnologyService from "../services/technologies/updateTechnology.service";

const createTechController = async (req: Request, res: Response) => {
  const techData: ITechRequest = req.body;
  const createdTech = await createTechService(techData);

  return res.status(201).json(createdTech);
};

const listAllTechsController = async (req: Request, res: Response) => {
  const techList = await listAllTechsService();

  return res.json(techList);
};

const updateTechnologyController = async (req: Request, res: Response) => {
  const id = req.params.id;
  const userData = req.body
  const updatedTech = await updateTechnologyService(userData, id);
  return res.status(200).json(updatedTech);
};

const deleteTechnologyController = async (req: Request, res: Response) => {
  const id = req.params.id;
  const deletedTech = await deleteTechnologyService(id);
  return res.status(204).json({});
};

export {
  createTechController,
  listAllTechsController,
  updateTechnologyController,
  deleteTechnologyController,
};
