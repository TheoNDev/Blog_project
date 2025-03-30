import { Router, Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt, { JwtPayload } from "jsonwebtoken";
import User from "../models/User";
import { authenticateJWT } from "../middleware/authenticateJWT";
import { JwtPayloadCustom, SignUpRequestBody } from "../types/interfaces";

const { body, validationResult } = require("express-validator");
const JWT_SECRET = process.env.JWT_SECRET!;
const router: Router = Router();

router.post(
  "/signup",

  body("userName").isString().notEmpty().withMessage("Username is required"),
  body("email").isEmail().withMessage("Invalid email format"),
  body("passWord")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),

  async (req: Request<{}, {}, SignUpRequestBody>, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { userName, passWord, email } = req.body;

    try {
      const existingUser = await User.findOne({
        $or: [{ email }, { userName }],
      });

      if (existingUser) {
        return res
          .status(400)
          .json({ message: "User with this email or username already exists" });
      }

      const hashedPassword = await bcrypt.hash(passWord, 10);

      const newUser = new User({ userName, passWord: hashedPassword, email });
      await newUser.save();
      res.status(201).json(newUser);
    } catch (error: any) {
      if (error.code === 11000) {
        res.status(400).json({ message: "Duplicate field value entered" });
      } else {
        res.status(500).json({ message: (error as Error).message });
      }
    }
  }
);

router.post(
  "/login",
  body("email").isEmail().withMessage("Invalid email format"),
  body("passWord").notEmpty().withMessage("Password is required"),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, passWord } = req.body;

    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "user not found" });
      }

      const isPasswordValid = await bcrypt.compare(passWord, user.passWord);
      if (!isPasswordValid) {
        return res.status(401).json({ message: "invalid password" });
      }

      const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {
        expiresIn: "1h",
      });

      res.cookie("authToken", token, {
        httpOnly: true,
        secure: false,
        sameSite: "strict",
        maxAge: 3600000,
      });

      res.status(200).json({ token, user });
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  }
);

router.get("/logout", (req, res) => {
  res.clearCookie("authToken", {
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  });
  res.status(200).json({ message: "Logged out successfully" });
});

router.get(
  "/user",
  authenticateJWT,
  async (req: Request & { user?: JwtPayloadCustom }, res: Response) => {
    try {
      const user = await User.findById(req.user?.id).select("-password");
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      res.json({ user });
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
);

router.post("/edit-user", (req, res) => {});

router.get(
  "/protected",
  authenticateJWT,
  (req: Request & { user?: JwtPayloadCustom }, res: Response) => {
    res.status(200).json({
      message: "Access granted",
      user: req.user,
    });
  }
);

export default router;
