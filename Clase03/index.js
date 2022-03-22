const express = require("express")
require("dotenv").config()
const port = process.env.port || 3030
let users = require("./db/data")


const server = express()
server.use(express.json())

server.listen(port, (err) => {
    err ? console.log(`Error: ${err}`) : console.log(`Servidor en http://localhost:${port}`)

})


server.get("/", (req, res) => {
    const content = `
    <h1>Server con Express</h1>
    <p>Hola ke asé</p>
    `
    res.send(content)
});

//get all users
server.get("/users", (req, res, next) => {
    users.length ? res.json(users) : next()
})

//get user by id
server.get("/users/:id", (req, res, next) => {
    if (isNaN(+req.params.id)) {
        res.status(400).json({ message: "Debe ingresar un número" })
    }
    const userById = users.filter((user) => user.id === +req.params.id)
    userById.length ? res.json(userById) : next()
})

//post new user
server.post("/users", (req, res) => {
    const { name, username, email } = req.body;
    if (!name || !username || (!email && name === "") || username === "" || email === "") {
        res.status(400).json({ message: "all fields required" })
    } else {
        users.push({...req.body })
        console.log(users)
        res.status(201).json({ message: "Recurso agregado ok" })
    }
})


//delete user by id
server.delete("/users/:id", (req, res, next) => {
    if (isNaN(+req.params.id)) {
        res.status(400).json({ message: "Debe ingresar un número" })
    }
    if (users.find(el => el.id === +req.params.id)) {
        const filteredArr = users.filter((user => user.id !== +req.params.id))
        users = filteredArr
        res.status(200).json({ message: "Recurso eliminado " })
            /*204 "no content" y la madre que lo parió. Acá explica por qué hace lo que hace:
            The 204(No Content) status code indicates that the server has successfully fulfilled the request and that there is no additional content to send in the response payload body.While 200 OK being a valid and the most common answer, returning a 204 No Content could make sense as there is absolutely nothing to return.*/

    } else {

        next()
    }
})

//404
server.use((req, res) => {
    res.status(404).json({ message: "Resource not found" })
})