import { Request, Response } from "express";
import { IUserLogin } from "../interfaces/users.interface";
import createSessionService from "../services/sessionService/session.service";

const createSessionController = async (req: Request, res: Response) => {
  const sessionData: IUserLogin = req.body;
  const token = await createSessionService(sessionData);

  return res.json({ token });
};

export default createSessionController;
