const express = require("express");
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const authRoutes = require('./routes/authRoutes');

const PORT = process.env.PORT || process.env.API_PORT || 5000;
const app = express();
app.use(express.json());
app.use(cors());

// register the routes
app.use('/api/auth', authRoutes);

const server = http.createServer(app);

mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log("Connected to MongoDB");

  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((error) => {
  console.error("MongoDB connection error", error);
  console.error("Server not started");
});