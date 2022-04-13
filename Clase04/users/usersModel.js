const connection = require("../db/config")

// -------------------------------------------------------------------------
//refactorizado (ver en clase)
const getAllUsers = async() => {
    const query = "SELECT * FROM users"
    try {
        return await connection.query(query)
    } catch (error) {
        return { "error": error.code }
    }
}

const getUserById = async(id) => {
        const query = `SELECT * FROM usergs WHERE id = ${id}`
        try {
            return await connection.query(query)
        } catch (error) {
            return { "error": error.code }
        }
    }
    // -----------------------------------------------------------------------------

module.exports = { getAllUsers, getUserById }