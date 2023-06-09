require("dotenv").config();
const express = require("express");
const path = require("path");
const server = express();
const { initSession, addUsersTolocals } = require("./middlewares/initSession");

const viewsDirectory = path.join(__dirname, "app/views");

server.set("view engine", "ejs");
server.set("views", viewsDirectory);
server.use(express.static("public"));
server.use(express.urlencoded({ extended: false }));

const router = require("./app/router");

server.use(initSession);

server.use(addUsersTolocals);

server.use(router);

server.listen(process.env.PORT, () => {
  console.log(
    `Listening on http://${process.env.BASE_URL}:${process.env.PORT}`
  );
});
