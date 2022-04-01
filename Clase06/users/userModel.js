const pool = require("../db/config");

module.exports.getAllUsers = async () => {
  const query = "SELECT * FROM users";
  try {
    return await pool.query(query);
  } catch (error) {
    error.message = error.code;
    return error;
  }
};

module.exports.getUserById = async (id) => {
  const query = `SELECT * FROM users WHERE id = ${id}`;
  try {
    return await pool.query(query);
  } catch (error) {
    error.message = error.code;
    return error;
  }
};

module.exports.addUser = async (user) => {
  const query = await `INSERT INTO users SET ?`;
  try {
    return await pool.query(query, user);
  } catch (error) {
    error.message = error.code;
    return error;
  }
};

module.exports.deleteUserById = async (id) => {
  const query = `DELETE FROM users WHERE id = ${id}`;
  try {
    return await pool.query(query);
  } catch (error) {
    error.message = error.code;
    return error;
  }
};

module.exports.editUserById = async (id, user) => {
  const query = `UPDATE users SET ? WHERE id = ${id}`; //TODO: check where with destruct
  try {
    return await pool.query(query, user);
  } catch (error) {
    error.message = error.code;
    return error;
  }
};
