const { v4: uuidv4 } = require('uuid');

const generateMessage = ({username, text, audioData, src, reactions,to}) =>{
    return {
        username,
        text,
        audioData,
        src,
        reactions,
        to, 
        createdAt: new Date().getTime(),
        id: uuidv4()
    }
}
const generateLocationMessage = (username, coords, src, to, reactions) =>{
    return {
        username,
        url:`https://google.com/maps?q=${coords.latitude},${coords.longitude}`,
        src,
        to, 
        reactions,
        createdAt: new Date().getTime(),
        id: uuidv4()
    }
}
module.exports = { generateMessage , generateLocationMessage}