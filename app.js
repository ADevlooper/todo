import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import todoRoutes from "./routes/todoRoutes.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Body parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Views and static assets
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", todoRoutes);

// Simple 404 handler
app.use((req, res) => {
  res.status(404).send("Not Found");
});

// Error handler (basic)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
