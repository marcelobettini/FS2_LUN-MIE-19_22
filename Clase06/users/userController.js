const userModel = require("./userModel");
const lessThanZero = require("../utils/lessThanZero");
const { hash } = require("../utils/encryptUtils");

exports.getAllUsers = async (req, res, next) => {
  const dbResponse = await userModel.getAllUsers();
  if (dbResponse instanceof Error) return next(dbResponse);
  dbResponse.length ? res.status(200).json(dbResponse) : next();
};

exports.getUserById = async (req, res, next) => {
  if (lessThanZero(req.params.id, next)) return;
  const dbResponse = await userModel.getUserById(+req.params.id);
  if (dbResponse instanceof Error) return next(dbResponse);
  dbResponse.length ? res.status(200).json(dbResponse) : next();
};

exports.addUser = async (req, res, next) => {
  const password = await hash(req.body.password);
  const dbResponse = await userModel.addUser({ ...req.body, password });
  dbResponse instanceof Error
    ? next(dbResponse)
    : res.status(201).json({ message: `User ${req.body.name} created!` });
};

exports.deleteUserById = async (req, res, next) => {
  if (lessThanZero(req.params.id, next)) return;
  const dbResponse = await userModel.deleteUserById(+req.params.id);
  if (dbResponse instanceof Error) return next(dbResponse);
  dbResponse.affectedRows ? res.status(204).end() : next();
};

exports.editUserById = async (req, res, next) => {
  if (lessThanZero(req.params.id, next)) return;
  const dbResponse = await userModel.editUserById(+req.params.id, req.body);
  if (dbResponse instanceof Error) return next(dbResponse);
  dbResponse.affectedRows ? res.status(200).json(req.body) : next();
};
