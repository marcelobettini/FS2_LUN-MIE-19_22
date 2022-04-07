import express from "express";
import jwt from "jsonwebtoken";
const jwt_secret = "superSecreto" //ojo, esto debe ser realmente una clave compleja y debemos almacenarla fuera del código.
import morgan from "morgan";
const port = 3030;
const server = express();
server.use(morgan('tiny'));
server.get("/api", (req, res) => res.json({ message: "INTRO TO JSON WEB TOKEN" }))
server.post("/api/login", (req, res) => {
    const user = {
            id: 1,
            name: "Marcelo Eduardo",
            email: "marcelo@outlook.com"
        }
        //cuando el usuario se loguea o se registra (eso es autenticación) creamos el token para identificarlo y darle permisos
        //(eso es autorización)  se lo pasamos al usuario en nuestra respuesta. El usuario lo almacena de alguna manera (en cookie, en local storage, en session storage, etc.) y cuando necesita algún recurso para el que se solicita permiso, envía el token en la petición.
    jwt.sign({ user }, jwt_secret, { expiresIn: '30s' }, (err, token) => {
        err ? res.sendStatus(500) : res.json({ token })
    })
})
server.post("/api/posts", verifyToken, (req, res) => {
    jwt.verify(req.token, jwt_secret, (error, authData) => {
        if (error) {
            res.sendStatus(401);
        } else {
            res.json({ message: "Post created!", authData })
        }
    })
})

function verifyToken(req, res, next) {
    const bearerHeader = req.headers["authorization"]
    if (typeof bearerHeader !== 'undefined') {
        const bearerToken = bearerHeader.split(" ")[1] //partimos bearerHeader en dos items de un arreglo [0] = Bearer y [1] es el token propiamente dicho
        req.token = bearerToken //ponemos el token en req.token
        next() //pasamos al controlador
    } else { //si bearerHeader es undefined signigica que no tiene token
        res.sendStatus(403)
    }
}
server.listen(port, (err) => {
    err ? console.log('Hubo un error:', err) : console.log('Servicio corre en http://localhost:' + port + '/api')
})