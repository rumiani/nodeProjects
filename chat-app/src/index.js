const Filter = require('bad-words')
const filter = new Filter();
const {generateMessage, generateLocationMessage} = require('./utils/message')
const { addUser, removeUser, getUser, getUsersInRoom } = require('./utils/users')
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
    console.log("New websocket connection");
    
    socket.on('join', (options, callback) =>{
        const {error, user} = addUser({id: socket.id, ...options})
        if(error) return callback(error)
        socket.join(user.room)
        socket.to(user.room).emit('message',generateMessage(`Welcome to the room ${user.username}`))
        socket.broadcast.to(user.room).emit('message',generateMessage(`${user.room} has joined!`))
        
        callback()
    })

    socket.on('sendMessage', (text , callback) => {
        io.emit('message', generateMessage(filter.clean(text)))
        callback()
    })
    socket.on('sendLocation', (coords, callback) =>{
        io.emit('location', generateLocationMessage(`https://google.com/maps?q=${coords.latitude},${coords.longitude}`))
        callback()
    })
    socket.on('disconnect', () =>{
        const user = removeUser(socket.id)
        if(user) io.to(user.room).emit('message', generateMessage(`${user.username } has left`))
    })
})

server.listen(PORT, () =>{
    console.log('server is running on port: ', PORT);
})


