const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.hash = async (text) => await bcrypt.hash(text, saltRounds);

exports.compare = async (text, hashedText) =>
  await bcrypt.compare(text, hashedText);
