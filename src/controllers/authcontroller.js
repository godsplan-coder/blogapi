import User from "../model/User.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";
import ApiError from "../utils/apiError.js";

export const registerUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new ApiError(400, "User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      throw new ApiError(400, "Invalid credentials");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new ApiError(400, "Invalid credentials");
    }

    const token = generateToken(user._id);

    res.status(200).json({
      success: true,
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getProfile = async (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
};