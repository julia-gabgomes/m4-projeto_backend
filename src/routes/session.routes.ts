import { Router } from "express";
import { sessionController } from "../controllers/sessionControler";

const sessionRoutes = Router();
sessionRoutes.post("", sessionController);

export default sessionRoutes;
