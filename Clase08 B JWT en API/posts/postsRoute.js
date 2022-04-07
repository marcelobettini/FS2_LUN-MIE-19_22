const router = require("express").Router();
const isAuth = require("../utils/isAuth")
const { addOne } = require("./postsController")

router.post("/", isAuth, addOne)

module.exports = router