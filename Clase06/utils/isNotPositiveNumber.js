const isNotPositiveNumber = (id, next) => {
  const positiveNumber = Math.sign(id) == 1;
  if (positiveNumber) return false;

  let error = new Error("ID must be a positive integer");
  error.status = 400;
  next(error);
  return true;
};

module.exports = isNotPositiveNumber;
