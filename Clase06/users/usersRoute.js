const router = require("express").Router();
const { getAllUsers, getUserById, addUser, deleteUserById, editUserById } = require("./usersController")
const { validatorCreateUser } = require("../validators/users")

router.get("/", getAllUsers)

router.get("/:id", getUserById);

router.post("/", validatorCreateUser, addUser);

router.patch("/:id", editUserById)

router.delete("/:id", deleteUserById);

module.exports = router