import express from "express";
import config from "./config.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import logger from "./utils/logger.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    application: "Git Conflict Demo",
    version: "1.0.0",
    environment: config.environment,
    status: "running"
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
    timestamp: new Date().toISOString()
  });
});

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

app.use((req, res) => {
  res.status(404).json({
    message: "Route not found"
  });
});

app.listen(config.port, () => {
  logger.info(`Server running on port ${config.port}`);
  logger.info(`Environment: ${config.environment}`);
});