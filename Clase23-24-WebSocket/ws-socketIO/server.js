const express = require("express");
const path = require("path");
const app = express();
//port settings
app.set('port', process.env.PORT || 3000)


//static folder
app.use(express.static(path.join(__dirname, '/public')))

//start server HTTP
const server = app.listen(app.get('port'), (err) => console.log(err ? `Error: ${err}` : `Server running on http://localhost:${app.get("port")}`))

//Socket.IO init
const SocketIO = require("socket.io")
const io = SocketIO(server)
io.on('connection', (socket) => {
    console.log("webSocket ok", socket.id);
    socket.on("chat:message", (data) => {
        io.sockets.emit('chat:message', data)
    })
    socket.on("chat:typing", (user) => {
        socket.broadcast.emit("chat:typing", user)
    })
})
