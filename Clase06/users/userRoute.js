const { usersController } = require("./userController");
const { addUserValidator } = require("../validators/addUserValidator");

const router = require("express").Router();

router.get("/", usersController.getAllUsers);

router.get("/:id", usersController.getUserById);

router.post("/", addUserValidator, usersController.addUser);

router.patch("/:id", usersController.editUserById);

router.delete("/:id", usersController.deleteUserById);

module.exports = router;
