import { Request, Response } from "express";
import { ITechResponseRequest } from "../interfaces/technologies.interface";
import createTechService from "../services/technologies/createTech.service";
import listAllTechsService from "../services/technologies/listAllTechs.service";

const createTechController = async (req: Request, res: Response) => {
  const techData: ITechResponseRequest = req.body;
  const createdTech = await createTechService(techData);

  return res.status(201).json(createdTech);
};

const listAllTechsController = async (req: Request, res: Response) => {
  const techList = await listAllTechsService();

  return res.json(techList);
};

const updateTechnologyController = async (req: Request, res: Response) => {
  return res.send("até agora funciona");
};

const deleteTechnologyController = async (req: Request, res: Response) => {
  return res.send("até agora funciona");
};

export {
  createTechController,
  listAllTechsController,
  updateTechnologyController,
  deleteTechnologyController,
};
