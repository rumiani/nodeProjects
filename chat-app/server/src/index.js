// const Filter = require('bad-words')
// const filter = new Filter();
// require('env-cmd');
import { generateMessage, generateLocationMessage } from "./utils/message.js";
import {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
} from "./utils/users.js";
import path from "path";
import http from "http";
import hbs from "hbs";
import cors from 'cors';

import express from "express";
const app = express();
app.use(cors({
  origin: 'http://localhost:3000', // Replace with your allowed origin
}));
const server = http.createServer(app);
import { Server } from "socket.io";
const io = new Server(server);

const PORT = process.env.PORT;

import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectoryPath));
app.get("/admin", (req, res) => {
  console.log(req.query);
  res.render("index", {
    title: "Chatrum",
  });
});












// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });



// app.post("/chat", (req, res) => {
//   console.log(req.file);
//   res.render("chat/index", {
//     title: "Chatrum",
//   });
// });
// app.get("/chat", (req, res) => {
//   console.log('get');
//   res.render("chat/index", {
//     title: "Chatrum",
//   });
// });
io.on("connection", (socket) => {
  console.log('server connection');
  console.log('server connection...');
  socket.on("join", (options, callback) => {
    console.log(options);
    const { error, user } = addUser({ id: socket.id, ...options });
    if (error) return callback(error);
    socket.join(user.room);
    socket.emit(
      "message",
      generateMessage({ username: "admin", text: `Welcome ${user.username}!` })
    );
    socket.broadcast
      .to(user.room)
      .emit(
        "message",
        generateMessage({
          username: "admin",
          text: `${user.username} has joined!`,
        })
      );
    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUsersInRoom(user.room),
    });
    callback();
  });

  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);
    // filter.clean(text)
    io.to(user.room).emit(
      "message",
      generateMessage({ username: user.username, ...message })
    );
    callback(message);
  });

  socket.on("sendLocation", (message, callback) => {
    const user = getUser(socket.id);
    io.to(user.room).emit(
      "location",
      generateLocationMessage(user.username, message.coords, message.src)
    );
    callback();
  });
  socket.on("sendReactions", ({ id, reactions }, callback) => {
    const user = getUser(socket.id);
    io.to(user.room).emit("reactions", (user.username, { id, reactions }));
    callback();
  });
  socket.on("sendReply", ({ id, replyUsername, prevMsg }, callback) => {
    const user = getUser(socket.id);
    io.to(user.room).emit(
      "reply",
      (user.username, { id, replyUsername, prevMsg })
    );
    callback();
  });
  socket.on("disconnect", () => {
    const user = removeUser(socket.id);
    if (user) {
      io.to(user.room).emit(
        "message",
        generateMessage({
          username: "admin",
          text: `${user.username} has left!`,
        })
      );
      io.to(user.room).emit("roomData", {
        room: user.room,
        users: getUsersInRoom(user.room),
      });
    }
  });
});
server.listen(PORT, () => {
  console.log("server is running on port: ", PORT);
});

export {app}