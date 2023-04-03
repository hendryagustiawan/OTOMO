const jwt = require("jsonwebtoken");
module.exports = {
  signToken: (payload) => jwt.sign(payload, "Sangat Rahasia"),
  decodeToken: (token) => jwt.verify(token, "Sangat Rahasia"),
};
