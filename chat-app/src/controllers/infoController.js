const infoController = (users, username, room) =>{
    console.log(users, username, room);
    const existingUser = users.find((user) => user.room === room && user.username === username)
    if(existingUser || username === 'admin' || room === 'admin')
    throw new Error('Username is in use')
    if(username.length < 3 || username.length > 20)
    throw new Error('Username must be between 3-20 characters')
    if(room.length < 3 || room.length > 20)
        throw new Error("Room's name must be between 3-20 characters")
}
module.exports = {infoController}