const express = require('express');
const app = express();
const {Server} = require('socket.io');
const path = require('path');
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, 'index.html'))
});
server.listen(3000, ()=>{
    console.log("Listening...");
})
io.on("connection", (socket)=>{
    socket.on('message', ({room,msg})=>{
        socket.to(room).emit('new-message', msg);
    })
    socket.on('join-room', (room)=>{
       socket.join(room); 
    })
    // socket.on("disconnect", ()=>{
    //     console.log("Disconnected from the Server");
    // })  
})
