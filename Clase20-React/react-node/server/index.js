const express = require("express");
const path = require("path")
const data = require("./data/pokemon.json")
const port = process.env.PORT || 3001
const app = express()
app.use(express.static(path.resolve(__dirname, "../client/public")))

app.get("/api", (req, res) => {
    res.json(data)
});
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/public", "index.html"))
})

app.listen(port, (err) => {
    console.log(err ? `Error: ${err}` : `Server up http://localhost:${port}`)
})
