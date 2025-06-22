import bodyParser from "body-parser";
import express from "express";
import { connectToDatabase } from "./src/DB/TodoDatabase.js";
import { TaskRouter } from "./src/routes/taskroutes.js";
import dotenv from 'dotenv';
import cors from "cors";

// Load environment variables
dotenv.config();

// Initialize Express
const Server = express();

// Middleware
Server.use(bodyParser.json());
Server.use(cors());

// Connect to MongoDB
connectToDatabase();
Server.get("/", (req, res) => {
  res.send("✅ Todo API is running");
});

// Routes
Server.use("/api", TaskRouter);

// ✅ Use dynamic port for Railway
const PORT = process.env.PORT || 5000;

Server.listen(PORT, () => {
    console.log(`✅ Server Started on port ${PORT}`);
});
