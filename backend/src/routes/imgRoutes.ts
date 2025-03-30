import express, { Router } from "express";
import upload from "../config/multerConfig";
import User from "../models/User";

const router: Router = express.Router();

router.post("/upload", upload.single("profileImg"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  const imageUrl = req.file.path; // Cloudinary URL for the uploaded image
  const { userId } = req.body;

  try {
    // Make sure to update the user and check if the user exists
    const user = await User.findByIdAndUpdate(
      userId,
      { profileImg: imageUrl },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Only send the response once everything has completed successfully
    return res.status(200).json({
      message: "Image uploaded and profile updated successfully",
      user,
    });
  } catch (error) {
    // Catch any errors that happen and send the response only once
    console.error("Error:", error);
    return res.status(500).json({ message: "Error updating profile image" });
  }
});

export default router;
