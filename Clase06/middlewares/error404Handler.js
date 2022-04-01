const error404Handler = (req, res, next) => {
  let error = new Error("Resource not found");
  error.status = 404;
  next(error);
};

module.exports = error404Handler;
