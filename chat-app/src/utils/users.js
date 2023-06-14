import {infoController} from '../controllers/infoController.js'
const users = []
const addUser = ({id, username, room, src}) =>{
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()
    
    try {infoController(users,username, room)
    } catch (error) { return {error:error.message}}

    const user = {id, username, room, src}
    users.push(user)
    return {user}
}
const removeUser = (id) =>{
    const index = users.findIndex((user) => user.id === id)
    if(index !== -1) return users.splice(index, 1)[0]
    // filter will keep running even after finding a match so we use splice
}
const getUser = (id) => users.find(user => user.id === id)

const getUsersInRoom = room => users.filter(user => user.room === room) 

export {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}