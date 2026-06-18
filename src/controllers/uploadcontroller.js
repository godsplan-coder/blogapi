import cloudinary from "../config/cloudinary.js";

export const uploadImage = async (req, res, next) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({
        success: false,
        message: "No image uploaded",
      });
    }

    const result = await cloudinary.uploader.upload(
      `data:${file.mimetype};base64,${file.buffer.toString("base64")}`
    );

    res.status(200).json({
      success: true,
      imageUrl: result.secure_url,
    });
  } catch (error) {
    next(error);
  }
};