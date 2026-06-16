// middlewares/multer.js

import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,

  params: {
    folder: "Veterinary_Booking/doctors",

    allowed_formats: ["jpg", "jpeg", "png", "svg", "webp", "gif"],
  },
});

const upload = multer({
  storage,
});

export default upload;
