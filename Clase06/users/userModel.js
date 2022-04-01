const pool = require("../db/config");

exports.getAllUsers = async () => {
  const query = "SELECT * FROM users";
  try {
    return await pool.query(query);
  } catch (error) {
    error.message = error.code;
    return error;
  }
};

exports.getUserById = async (id) => {
  const query = `SELECT * FROM users WHERE id = ${id}`;
  try {
    return await pool.query(query);
  } catch (error) {
    error.message = error.code;
    return error;
  }
};

exports.addUser = async (user) => {
  const query = await `INSERT INTO users SET ?`;
  try {
    return await pool.query(query, user);
  } catch (error) {
    error.message = error.code;
    return error;
  }
};

exports.deleteUserById = async (id) => {
  const query = `DELETE FROM users WHERE id = ${id}`;
  try {
    return await pool.query(query);
  } catch (error) {
    error.message = error.code;
    return error;
  }
};

exports.editUserById = async (id, user) => {
  const query = `UPDATE users SET ? WHERE id = ${id}`; //TODO: check where with destruct
  try {
    return await pool.query(query, user);
  } catch (error) {
    error.message = error.code;
    return error;
  }
};
