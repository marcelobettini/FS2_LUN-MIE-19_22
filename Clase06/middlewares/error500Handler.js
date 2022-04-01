module.exports.error500Handler = (error, req, res, next) => {
  if (!error.status) error.status = 500;
  res
    .status(error.status)
    .json({ status: error.status, message: error.message });
};
