import express from "express";
import {
  createBlog,
  getBlogs,
  getBlogById,
  deleteBlog,
  updateBlog,
} from "../controllers/blogcontroller.js";

import protect from "../middleware/authMiddleware.js";
import validate from "../middleware/validationMiddleware.js";
import { createBlogValidation } from "../validation/blogValidation.js";

const router = express.Router();

router.get("/", getBlogs);       // <-- Add this
router.get("/:id", getBlogById);

router.post(
  "/",
  protect,
  createBlogValidation,
  validate,
  createBlog
);

router.put("/:id", protect, updateBlog);
router.delete("/:id", protect, deleteBlog);

export default router;