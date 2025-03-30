import { JwtPayload } from "jsonwebtoken";
import { JwtPayloadCustom } from "./interfaces";

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayloadCustom; // Adjust based on your payload structure
    }
  }
}
