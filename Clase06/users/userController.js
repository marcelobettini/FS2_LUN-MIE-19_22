const userModel = require("./userModel");
const isNotPositiveNumber = require("../utils/isNotPositiveNumber");
const { hash } = require("../utils/encryptUtils");

module.exports.getAllUsers = async (req, res, next) => {
  const dbResponse = await userModel.getAllUsers();
  if (dbResponse instanceof Error) return next(dbResponse);
  dbResponse.length ? res.status(200).json(dbResponse) : next();
};

module.exports.getUserById = async (req, res, next) => {
  if (isNotPositiveNumber(req.params.id, next)) return;
  const dbResponse = await userModel.getUserById(+req.params.id);
  if (dbResponse instanceof Error) return next(dbResponse);
  dbResponse.length ? res.status(200).json(dbResponse) : next();
};

module.exports.addUser = async (req, res) => {
  const password = await hash(req.body.password);
  const dbResponse = await userModel.addUser({ ...req.body, password });
  dbResponse instanceof Error
    ? next(dbResponse)
    : res.status(201).json({ message: `User ${req.body.name} created!` });
};

module.exports.deleteUserById = async (req, res, next) => {
  if (isNotPositiveNumber(req.params.id, next)) return;
  const dbResponse = await userModel.deleteUserById(+req.params.id);
  if (dbResponse instanceof Error) return next(dbResponse);
  dbResponse.affectedRows ? res.status(204).end() : next();
};

module.exports.editUserById = async (req, res) => {
  if (isNotPositiveNumber(req.params.id, next)) return;
  const dbResponse = await userModel.editUserById(+req.params.id, req.body);
  if (dbResponse instanceof Error) return next(dbResponse);
  dbResponse.affectedRows ? res.status(200).json(req.body) : next();
};
