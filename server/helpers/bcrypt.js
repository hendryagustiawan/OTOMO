const bcrypt = require("bcryptjs");
module.exports = {
  hashPassword: (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(8)),
  comparePassword: (inputPassword, DB_Password) => bcrypt.compareSync(inputPassword, DB_Password),
};
