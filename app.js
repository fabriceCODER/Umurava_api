const express = require("express");
const challengeRoutes = require("./routes/challengeRoute");
const errorHandler = require("./middleware/errorMiddleware");

const app = express();

app.use(express.json());
app.use("/api/challenges", challengeRoutes);
app.use(errorHandler);

module.exports = app;
