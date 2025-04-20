// Initialize Express App
const express = require("express");
const app = express();
module.exports = app;

// Load environment variables from .env file
const dotenv = require("dotenv");
dotenv.config();
require("./Config/DB");

// new Intl.DateTimeFormat("en-US", {
//   timeZone: "Africa/Khartoum",
//   dateStyle: "full",
//   timeStyle: "short",
// }).format(new Date());

// console.log(date);

// Connect to DB

// Middleware
const path = require("path");
app.use("/uploads", express.static(path.join(__dirname, "../Uploads")));
// Parse incoming requests with JSON payloads
app.use(express.json());

// Cors middleware to enable Cross-Origin Resource Sharing
const cors = require("cors");
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Import Routes
const CategoryRoutes = require("./Modules/Categories/CategoryRoutes");
const BookRoutes = require("./Modules/Books/BookRoutes");
const LoginRoutes = require("./Modules/login/LoginRoutes");

// Use Routes
app.use("/api/categories", CategoryRoutes);
app.use("/api/books", BookRoutes);
app.use("/api/login", LoginRoutes);
