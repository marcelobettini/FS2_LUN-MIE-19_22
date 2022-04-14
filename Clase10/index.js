const express = require("express")
const cors = require("cors")
const hbs = require("express-handlebars")
const path = require("path")
require("dotenv").config()
const port = process.env.port || 3030
require("./db/config")

const server = express()
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(express.static("storage"))
server.use(cors())

/*Bootstrap files*/
server.use("/css", express.static(path.join(__dirname, "node_modules/bootstrap/dist/css")))
server.use("/js", express.static(path.join(__dirname, "node_modules/bootstrap/dist/js")))

//Handlebars
server.set("view engine", "hbs");
server.set("views", "./views"); //path.join(__dirname, "views")
server.engine("hbs", hbs.engine({ extname: "hbs" }))


server.get("/", (req, res) => {
    const content = `
    <h1>Server con Express</h1>
    <p>Hola ke asé</p>
    `
    res.send(content)
});

//Users router
server.use("/users", require("./users/usersRoute"))

//Posts router
server.use("/posts", require("./posts/postsRoute"))
//404
server.use((req, res, next) => {
    let error = new Error("Resource not found");
    error.status = 404
    next(error)

})

//Error handler
server.use((error, req, res, next) => {
    if (!error.status) {
        error.status = 500
        error.message = "Internal Server Error"
    }

    res.status(error.status).json({ status: error.status, message: error.message })
})

server.listen(port, (err) => {
    err ? console.log(`Error: ${err}`) : console.log(`Servidor en http://localhost:${port}`)
})