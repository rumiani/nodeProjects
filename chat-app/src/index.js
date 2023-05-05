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
const chatRouter = require('./routers/chatRouter');

const publicDirectoryPath = path.join(__dirname+'../../public')
app.use(express.static(publicDirectoryPath))



let count = 0
io.on('connection', (socket) =>{
    console.log("Now websocket connection");
    
    // socket.emit('CountUpdated', count)
    // socket.on('increment', () =>{
    //     count++
    //     io.emit('CountUpdated', count)
    // })
    // socket.emit('message','welcome')
    socket.broadcast.emit('message','A new user has joined')
    socket.on('sendMessage', (text , callback) => {
        // console.log(filter.clean('text'));
        console.log(text);
        io.emit('message', text)
        callback()

    })
    socket.on('sendLocation', (coords) =>{
        console.log('coords: ', coords);
        io.emit('location', `https://google.com/maps?q=${coords.latitude},${coords.longitude}`)
    })
    socket.on('disconnect', () =>{
        io.emit('message', 'A user has left')
    })
})

server.listen(PORT, () =>{
    console.log('server is running on port: ', PORT);
})


