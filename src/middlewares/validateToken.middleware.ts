import "dotenv/config";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const validateTokenMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("cheguei")
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "invalid token no passed",
    });
  }
  token = token.split(" ")[1];
  jwt.verify(token, process.env.SECRET_KEY as string, (error, decoded: any) => {
    if (error) {
      return res.status(401).json({
        message: "invalid token",
      });
    }
    req.user = { id: decoded.sub, isActive: decoded.isActive };
  });
  return next();
};

export default validateTokenMiddleware;
