import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";

import cloudinaryConfig from "./cloudinaryConfig";

const storage = new CloudinaryStorage({
  cloudinary: cloudinaryConfig,
  params: {
    folder: "profile-images",
    allowed_formats: ["jpeg", "png", "jpg"],
  } as any,
});

const upload = multer({ storage });

export default upload;
