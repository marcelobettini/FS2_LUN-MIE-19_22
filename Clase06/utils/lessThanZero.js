const lessThanZero = (id, next) => {
  const number = parseInt(id);
  if (number >= 0) return false;

  let error = new Error("ID must be a positive integer");
  error.status = 400;
  next(error);
  return true;
};

module.exports = lessThanZero;
