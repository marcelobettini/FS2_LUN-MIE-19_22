const userModel = require("./usersModel");
const notNumber = require("../utils/notNumber");
const { hashPassword, checkPassword } = require("../utils/handlePassword");

const getAllUsers = async (req, res, next) => {
  const dbResponse = await userModel.getAllUsers();
  if (dbResponse instanceof Error) return next(dbResponse);
  dbResponse.length ? res.status(200).json(dbResponse) : next();
};

const getUserById = async (req, res, next) => {
  if (notNumber(req.params.id, next)) return;
  const dbResponse = await userModel.getUserById(+req.params.id);
  if (dbResponse instanceof Error) return next(dbResponse);
  dbResponse.length ? res.status(200).json(dbResponse) : next();
};

const addUser = async (req, res) => {
  const password = await hashPassword(req.body.password);
  const dbResponse = await userModel.addUser({ ...req.body, password });
  dbResponse instanceof Error
    ? next(dbResponse)
    : res.status(201).json({ message: `User ${req.body.name} created!` });
};

const deleteUserById = async (req, res, next) => {
  if (notNumber(req.params.id, next)) return;
  const dbResponse = await userModel.deleteUserById(+req.params.id);
  if (dbResponse instanceof Error) return next(dbResponse);
  dbResponse.affectedRows ? res.status(204).end() : next();
};

const editUserById = async (req, res) => {
  if (notNumber(req.params.id, next)) return;
  const dbResponse = await userModel.editUserById(+req.params.id, req.body);
  if (dbResponse instanceof Error) return next(dbResponse);
  dbResponse.affectedRows ? res.status(200).json(req.body) : next();
};

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  deleteUserById,
  editUserById,
};
