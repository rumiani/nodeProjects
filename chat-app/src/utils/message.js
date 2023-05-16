const { v4: uuidv4 } = require('uuid');
const uniqueID = uuidv4();

const generateMessage = (username, text, src) =>{
    return {
        username,
        text,
        src,
        createdAt: new Date().getTime(),
        id: uuidv4()
    }
}
const generateLocationMessage = (username, coords, src) =>{
    return {
        username,
        url:`https://google.com/maps?q=${coords.latitude},${coords.longitude}`,
        src,
        createdAt: new Date().getTime()
    }
}
module.exports = { generateMessage , generateLocationMessage}