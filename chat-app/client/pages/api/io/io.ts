import io from 'socket.io-client';
let socket = io('http://localhost:8000');

export const connectToServer = () =>{
    console.log('client');
    socket.on('connect', () => {
      console.log('Connected to server');
    });
    
    socket.on('message', (data) => {
      console.log('Received message:', data);
    });
    
    return () => {
      // Disconnect when the component unmounts
      socket.disconnect();
    };
}
export const sendMessageToServer = (message)=>{
  console.log('send message');
  
  socket.emit('sendMessage', message, (message) =>{
  });
}
export const getRoomData = ()=>{
  socket.on('roomData', roomData =>{
    return roomData
  })
}