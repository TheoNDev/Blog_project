import dotenv from "dotenv";
// Load environment variables
dotenv.config();

import app from "./app";

import mongoose from "mongoose";

console.log(process.env.MONGO_URI);
// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err: Error) => console.log("MongoDB connection error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
