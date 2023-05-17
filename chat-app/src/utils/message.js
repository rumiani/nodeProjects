const { v4: uuidv4 } = require('uuid');

const generateMessage = ({username, room, text, src, to, reactions}) =>{
    console.log({username, text, src, to, reactions});
    return {
        username,
        text,
        src,
        to,
        reactions,
        createdAt: new Date().getTime(),
        id: uuidv4()
    }
}
const generateLocationMessage = (username, coords, src) =>{
    return {
        username,
        url:`https://google.com/maps?q=${coords.latitude},${coords.longitude}`,
        src,
        createdAt: new Date().getTime(),
        id: uuidv4()
    }
}
module.exports = { generateMessage , generateLocationMessage}