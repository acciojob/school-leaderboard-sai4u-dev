
const express = require("express");

const app = express();

const { data } = require("./data.js");

const config = require("./config.json");

// ===============================
// MongoDB Configuration
// ===============================

const mongoURI =
  config.MONGODB_URI || "mongodb://localhost:27017/newsFeed";

// ===============================
// Middleware
// ===============================

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// ===============================
// Routes
// ===============================

app.get("/", (req, res) => {
  res.status(200).send("hello world!");
});

app.get("/topRankings", (req, res) => {
  const limit = Number(req.query.limit) || 20;
  const offset = Number(req.query.offset) || 0;

  const users = data.slice(offset, offset + limit);

  res.status(200).json(users);
});

// ===============================

module.exports = { app };