const { usersController } = require("./usersController");
const { validatorCreateUser } = require("../validators/users");

const router = require("express").Router();

router.get("/", usersController.getAllUsers);

router.get("/:id", usersController.getUserById);

router.post("/", validatorCreateUser, usersController.addUser);

router.patch("/:id", usersController.editUserById);

router.delete("/:id", usersController.deleteUserById);

module.exports = router;
