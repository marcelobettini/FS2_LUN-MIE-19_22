const express = require("express");
require("dotenv").config();
require("./db/config");

const server = express();
server.use(express.json());

const port = process.env.port || 3030;

server.listen(port, (err) => {
  err
    ? console.log(`Error: ${err}`)
    : console.log(`Servidor en http://localhost:${port}`);
});

server.get("/", (req, res) => {
  res.send('<h1>Server con Express</h1>');
});

server.use("/users", require("./users/userRoute"));

server.use(require("./middlewares/error404Handler"));
server.use(require("./middlewares/error500Handler"));
