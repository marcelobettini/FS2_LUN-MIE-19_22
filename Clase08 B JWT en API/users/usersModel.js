const pool = require("../db/config")


//get all users 
const getAllUsers = () => {
    const query = "SELECT * FROM users"
    try {
        return pool.query(query)
    } catch (error) {
        error.message = error.code
        return error
    }
}

//get user by id
const getUserById = async(id) => {
    const query = `SELECT * FROM users WHERE id = ${id}`
    try {
        return await pool.query(query)
    } catch (error) {
        error.message = error.code
        return error
    }
}

//Register new user
const registerNewUser = (user) => {
    const query = `INSERT INTO users SET ?`
    try {
        return pool.query(query, user)
    } catch (error) {
        error.message = error.code
        return error
    }
}

//Login user
const loginUser = (email) => {
    const query = `SELECT * FROM users WHERE email = '${email}'`
    try {
        return pool.query(query);
    } catch (error) {
        error.message = error.code
        return error
    }
}

//delete user
const deleteUserById = (id) => {
    const query = `DELETE FROM users WHERE id = ${id}`
    try {
        return pool.query(query)
    } catch (error) {
        error.message = error.code
        return error
    }
}

//edit user
const editUserById = (id, user) => {
    const query = `UPDATE users SET ? WHERE id = ${id}` //check where with destruct
    try {
        return pool.query(query, user)
    } catch (error) {
        error.message = error.code
        return error
    }
}

module.exports = { getAllUsers, getUserById, registerNewUser, loginUser, deleteUserById, editUserById }