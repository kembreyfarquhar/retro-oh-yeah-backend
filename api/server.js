const express = require("express")
const middleWareConfig = [
    require("helmet")(),
    require("morgan")("combined"),
    require("cors")(),
    express.json()
]

const server = express()

middleWareConfig.forEach(config => server.use(config))

server.get("/", (_req, res) => {
    res.send(
      'running'
    );
  });
  
  module.exports = server;