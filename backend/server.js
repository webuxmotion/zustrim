const express = require("express");
const http = require("http");
const path = require('path');
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");


const authRoutes = require('./routes/authRoutes');

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cors());




const server = http.createServer(app);


if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get(/.*?/s, (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

// register the routes
app.use('/api/auth', authRoutes);

mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log("Connected to MongoDB");

  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((error) => {
  console.error("MongoDB connection error", error);
  console.error("Server not started");
});