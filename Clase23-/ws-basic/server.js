const WebSocketServer = require("websocket").server
const express = require("express")
const PORT = process.env.PORT || 3000
const app = express()
app.use(express.static('public')) //aquí reside nuestro index.html

const server = app.listen(PORT, (err) => console.log(err ? `Error: ${err}` : `Server up on http://localhost:${PORT}`));

//Crear el servidor de WebSocket. Necesita un server del protocolo HTTP para establecer la conexión cliente/servidor (handshake)
const webSocketServer = new WebSocketServer({
    httpServer: server
});

//crear un arreglo donde guardar la referencia de cada conexión entrante para enviar a todos los conectados cada nuevo mensaje que ingrese al backend
const connections = []
webSocketServer.on("request", (request) => {
    const connection = request.accept('echo-protocol', request.origin) //req.origin significa que aceptarmos la petición proveniente de cualquier origen. En prod quizá quieran poner una whitelist (o una blacklist)
    connections.push(connection)
    connection.sendUTF("Connections established 🆗")
    connection.on('message', (msg) => {
        if (msg.type === 'utf8') {
            // connection.send(msg.utf8Data)
            broadcast(msg.utf8Data)
        }

    });

    function broadcast(msg) {
        connections.forEach(client => {
            client.sendUTF(msg)
        })
    }

})