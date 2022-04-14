const router = require("express").Router();
const { listAll, listOne, register, login, forgot, reset, saveNewPass, removeOne, editOne } = require("./usersController")
const { validatorCreateUser, validatorResetPassword, validatorModifyUser } = require("../validators/users")
const fileUpload = require("../utils/handleStorage")
    //get all users
router.get("/", listAll)

//get user by id
router.get("/:id", listOne);

//Register
router.post("/register", fileUpload.single("file"), validatorCreateUser, register);
//Login
router.post("/login", login)
    //Forgot password
router.post("/forgot-password", forgot)
    //Get Magic Link
router.get("/reset/:token", reset);
router.post("/reset/:token", validatorResetPassword, saveNewPass)


//patch user by id
router.patch("/:id", fileUpload.single("file"), validatorModifyUser, editOne)

//delete user by id
router.delete("/:id", removeOne);

module.exports = router