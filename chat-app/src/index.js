const Filter = require('bad-words')
// const filter = new Filter();
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
    // console.log("New websocket connection");
    
    socket.on('join', (options, callback) =>{
        const {error, user} = addUser({id: socket.id, ...options})
        if(error) return callback(error)
        socket.join(user.room)
        socket.emit('message',generateMessage('admin' , `Welcome ${user.username}!`))
        socket.broadcast.to(user.room).emit('message',generateMessage('admin',`${user.username} has joined!`))
        io.to(user.room).emit('roomData', {
            room: user.room,
            users: getUsersInRoom(user.room)
        })
        callback()
    })

    socket.on('sendMessage', (message , callback) => {
        const user = getUser(socket.id)
        // filter.clean(text)
        io.to(user.room).emit('message', generateMessage(user.username, message.text, message.src))
        callback()
    })
    socket.on('sendLocation', (message, callback) =>{
        const user = getUser(socket.id)
        io.to(user.room).emit('location', generateLocationMessage(user.username, message.coords, message.src))
        callback()
    })
    socket.on('disconnect', () =>{
        const user = removeUser(socket.id)
        if(user) {
            io.to(user.room).emit('message', generateMessage('Admin', `${user.username } has left`))
            io.to(user.room).emit('roomData', {
                room: user.room,
                users: getUsersInRoom(user.room)
            })
        }
    })
})

server.listen(PORT, () =>{
    console.log('server is running on port: ', PORT);
})


