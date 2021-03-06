const router = require("express").Router();
const { listAll, listOne, addOne, removeOne, editOne } = require("./usersController")

//get all users
router.get("/", listAll)

//get user by id
router.get("/:id", listOne);

//post new users
router.post("/", addOne);

//patch user by id
router.patch("/:id", editOne)

//delete user by id
router.delete("/:id", removeOne);

// //404
// router.use((req, res) => {
//     res.status(404).json({ message: "Resource not found" })
// })

module.exports = router