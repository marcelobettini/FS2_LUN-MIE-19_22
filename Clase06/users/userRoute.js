const userController = require("./userController");
const addUserValidator = require("../validators/addUserValidator");

const router = require("express").Router();

router.get("/", userController.getAllUsers);

router.get("/:id", userController.getUserById);

router.post("/", addUserValidator, userController.addUser);

router.patch("/:id", userController.editUserById);

router.delete("/:id", userController.deleteUserById);

module.exports = router;
