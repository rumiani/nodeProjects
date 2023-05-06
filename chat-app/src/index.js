const Filter = require('bad-words')
const filter = new Filter();
 const path = require("path");
const http = require('http')
const express = require("express");
const socketio = require('socket.io')
const app = express();
const server = http.createServer(app)
const io = socketio(server)

const PORT = process.env.PORT

const publicDirectoryPath = path.join(__dirname+'../../public')
app.use(express.static(publicDirectoryPath))



io.on('connection', (socket) =>{
    console.log("Now websocket connection");
    socket.broadcast.emit('message','A new user has joined')
    socket.on('sendMessage', (text , callback) => {
        io.emit('message', filter.clean(text))
        callback()

    })
    socket.on('sendLocation', (coords, callback) =>{
        io.emit('location', `https://google.com/maps?q=${coords.latitude},${coords.longitude}`)
        callback()
    })
    socket.on('disconnect', () =>{
        io.emit('message', 'A user has left')
    })
})

server.listen(PORT, () =>{
    console.log('server is running on port: ', PORT);
})


