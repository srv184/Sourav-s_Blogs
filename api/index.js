import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import postRoutes from "./routes/post.route.js";
import commentRoutes from "./routes/comment.route.js";
import cookieParser from "cookie-parser";
import cors from "cors"; // ✅ Added CORS
import path, { dirname } from "path";
import { fileURLToPath } from "url";

// Resolve __dirname (since ES modules don't have it by default)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ✅ Load environment variables explicitly from api/.env
dotenv.config({ path: path.join(__dirname, ".env") });

// 🧠 Debug check
console.log("Loaded Mongo URI:", process.env.MONGO);

// ✅ Connect to MongoDB
mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("✅ MongoDB is connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

const app = express();

// ✅ Enable CORS for frontend
app.use(
  cors({
    origin: "http://localhost:5173", // Frontend origin (Vite)
    credentials: true, // Allow cookies / headers if needed
  })
);

app.use(express.json());
app.use(cookieParser());

// ✅ API routes
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);
app.use("/api/comment", commentRoutes);

// ✅ Serve frontend (Vite build)
app.use(express.static(path.join(__dirname, "../client/dist")));

// Handle all unknown routes (for React Router)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

// ✅ Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// ✅ Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}!`);
});
