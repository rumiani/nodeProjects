const generateMessage = (username, text, src) =>{
    return {
        username,
        text,
        src,
        createdAt: new Date().getTime()
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