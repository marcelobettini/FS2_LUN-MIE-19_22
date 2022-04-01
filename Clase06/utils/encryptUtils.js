const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports.hash = async (text) => await bcrypt.hash(text, saltRounds);

module.exports.compare = async (text, hashedText) =>
  await bcrypt.compare(text, hashedText);
