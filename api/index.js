import express from "express";

const app = express();
import authRoute from "./routes/auth.js";
import commentRoutes from "./routes/comments.js";
import likeRoutes from "./routes/likes.js";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";
import { db } from "./connect.js";
import cors from "cors";
import cookieParser from "cookie-parser";

// Middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());
// Check connect to database
db.connect((err) => {
  if (err) {
    console.log("error connecting: " + err.stack);
    return;
  }
  console.log("success");
});

app.use("/api/auth", authRoute);
app.use("/api/comments", commentRoutes);
app.use("/api/likes", likeRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);

app.listen(8800, () => {
  console.log("API Working!");
});
