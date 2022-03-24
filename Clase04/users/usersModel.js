const connection = require("../db/config")

// -------------------------------------------------------------------------
//refactorizado (ver en clase)
const fetchAllUsers = async() => {
        const query = "SELECT * FROM users" //forzamos error con nombre de tabla
        try {
            return await connection.query(query)
        } catch (error) {
            return { "error": error.code } //cuál de todas las key conviene retornar?
        }
    }
    // -----------------------------------------------------------------------------
const fetchUserById = async(id) => {
    try {
        const query = `SELECT * FROM users WHERE id = ${id}`
        const user = await connection.query(query)
        return user
    } catch (error) {
        console.log(error)
    }
}


module.exports = { fetchAllUsers, fetchUserById }