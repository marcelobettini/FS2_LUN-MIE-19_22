// import express from "express"
// import dotenv from "dotenv"
// import './DB_Config/db'
const express = require("express")
require("dotenv").config()
require('./DB_Config/db')

const server = express()
server.use(express.json());
// server.use(express.urlencoded({ extended: true }))

server.use("/users", require("./users/usersRoute"))
server.use("/posts", require("./posts/postRoute"))
server.listen(3000, (err) => {
    err ? console.dir("Server failed...") : console.dir("Server running on port http://localhost:3000")
})
