import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/authRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import errorHandler from "./middleware/errorMiddleware.js";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/upload",uploadRoutes);
app.use(errorHandler); 
app.get("/", (req, res) => {
  res.json({
    message: "Blog Api Running",
  });
});
export default app;
