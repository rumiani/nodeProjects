const infoController = (users, username, room) =>{
    const existingUser = users.find((user) => user.room === room && user.username === username)
    if(existingUser || username === 'admin' || room === 'admin')
    throw new Error('Username is in use')
    if(username.length < 3 || username.length > 20)
    throw new Error('Username must be between 3-20 characters')
    if(room.length < 3 || room.length > 25)
        throw new Error("Room's name must be between 3-25 characters")
    // test phase:
    if(room !== 'mychatrumonlyroomtotest')
        throw new Error("Invalid room's name. Please contact @rumianist on twitter.")
}
module.exports = {infoController}