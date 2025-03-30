import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
// Import routes
import postRoutes from "./routes/postRoutes";
import userRoutes from "./routes/userRoutes";
import imgRoutes from "./routes/imgRoutes";

const app = express();

// Middleware
dotenv.config();
app.use(
  cors({
    origin: "http://localhost:5173", // Allow the frontend domain.
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

// Routes
app.use("/auth", userRoutes);
app.use("/posts", postRoutes);
app.use("/img", imgRoutes);

export default app;
