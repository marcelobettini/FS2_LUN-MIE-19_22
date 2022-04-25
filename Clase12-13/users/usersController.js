const { findByIdAndRemove, findByIdAndDelete } = require("./UserModel")
const User = require("./UserModel")

//GET ALL USERS
const getAllUsers = async (req, res, next) => {
    try {
        const data = await User.find()
        res.status(200).json(data)
    } catch (err) {
        res.sendStatus(404)
    }
}

//GET USER BY ID
const getUserById = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user)
    } catch (err) {
        res.sendStatus(404)
    }
}

//POST NEW USER
/**
 * Create User
 *
 * @param {string}      fullName
 * @param {string}      userName
 * @param {string}      email
 * @param {string}      password
 *
 * @returns {Object}
 */
const createUser = async (req, res, next) => {
    console.log(req.body)
    const data = {
        fullName: req.body.fullName,
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password
    }
    const newUser = new User(data)
    newUser.save((error) => {
        if (error) {
            console.log(error)
        } else res.sendStatus(200)
    })
}

//UPDATE USER
const updateUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body)
        console.log(user) //esto lo hacemos para aprender que el método retorna el objeto si lo encuentra
        res.status(200).json({ message: "User Updated" })
    } catch (err) {
        res.sendStatus(404)
    }
}

//DELETE USER
const deleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.sendStatus(202)
    } catch (error) {
        res.sendStatus(404)
    }

}

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser }