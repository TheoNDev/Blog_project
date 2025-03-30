import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JwtPayloadCustom } from "../types/interfaces";

const JWT_SECRET = process.env.JWT_SECRET!;

export const authenticateJWT: (
  req: Request & { user?: JwtPayloadCustom },
  res: Response,
  next: NextFunction
) => void = (req, res, next) => {
  const token = req.cookies?.authToken;

  if (!token) {
    return res.status(401).json({ message: "Authentication token missing" });
  }

  try {
    const user = jwt.verify(token, JWT_SECRET) as JwtPayloadCustom;
    req.user = user;
    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid token" });
  }
};
