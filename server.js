const express = require("express");
const morgan = require("morgan");
const apiRoutes = require("./routes");

const server = express();
server.use(express.json());
server.use(morgan("dev"));

server.use("/api", apiRoutes);

module.exports = server;