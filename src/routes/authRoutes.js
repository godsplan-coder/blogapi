import express from "express";
import protect from "../middleware/authMiddleware.js";
import validate from "../middleware/validationMiddleware.js";
import {
  registerValidation,
  loginValidation,
} from "../validation/authValidation.js";

import {
  registerUser,
  loginUser,
  getProfile,
} from "../controllers/authcontroller.js";
const router = express.Router();
router.post("/register",registerValidation,validate, registerUser);
router.post("/login",loginValidation,validate, loginUser);
router.get("/profile", protect, getProfile);
export default router;
