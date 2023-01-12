import { Router } from "express";
import { sessionController } from "../controllers/sessionController/sessionControler";

const sessionRoutes = Router();
sessionRoutes.post("", sessionController);


export default sessionRoutes;