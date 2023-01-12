import { Request, Response } from "express";
import { IUserLogin } from "../interfaces/users.interface";
import sessionService from "../services/sessionService/session.service";

const sessionController = async (req: Request, res: Response) => {
  const sessionData: IUserLogin = req.body;
  const token = await sessionService(sessionData);
  return res.json({ token });
};

export { sessionController };
