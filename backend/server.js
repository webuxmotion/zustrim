const express = require("express");
const http = require("http");
const path = require('path');
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

const socketServer = require('./socketServer');

const authRoutes = require('./routes/authRoutes');
const friendInvitationRoutes = require('./routes/friendInvitationRoutes');

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());

const allowedOrigins = [
  "http://localhost:5173",
  "https://zustrim.onrender.com",
  "https://www.zustrim.onrender.com",
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));


const server = http.createServer(app);
socketServer.registerSocketServer(server);

// register the routes
app.use('/api/auth', authRoutes);
app.use('api/friend-invitation', friendInvitationRoutes);


if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get(/.*?/s, (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log("Connected to MongoDB");

  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((error) => {
  console.error("MongoDB connection error", error);
  console.error("Server not started");
});