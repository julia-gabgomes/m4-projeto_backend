import { Request, Response } from "express";
import { ITechRequest } from "../interfaces/technologies.interface";
import createTechService from "../services/technologies/createTech.service";
import deleteTechnologyService from "../services/technologies/deleteTech.service";
import listUserTechsService from "../services/technologies/listAllTechs.service";
import updateTechnologyService from "../services/technologies/updateTech.service";

const createTechController = async (req: Request, res: Response) => {
  const techData: ITechRequest = req.body;
  const userId: string = req.user.id;
  const createdTech = await createTechService(techData, userId);

  return res.status(201).json(createdTech);
};

const listUserTechsController = async (req: Request, res: Response) => {
  const userId: string = req.user.id;
  const techList = await listUserTechsService(userId);

  return res.json(techList);
};

const updateTechController = async (req: Request, res: Response) => {
  const techId: string = req.params.id;
  const techData = req.body;
  const updatedTech = await updateTechnologyService(techData, techId);

  return res.status(200).json(updatedTech);
};

const deleteTechController = async (req: Request, res: Response) => {
  const id = req.params.id;
  const deletedTech = await deleteTechnologyService(id);

  return res.status(204).json({});
};

export {
  createTechController,
  listUserTechsController,
  updateTechController,
  deleteTechController,
};
