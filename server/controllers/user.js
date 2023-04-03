const { Users } = require("../models");
const { comparePassword } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");

class ControllerUser {
  static async login(req, res, next) {
    const { username, password } = req.body;

    if (!username && !password) next({ name: "password & username is required" });
    else if (!username) next({ name: "username is required" });
    else if (!password) next({ name: "password is required" });
    else {
      try {
        const data = await Users.findOne({ where: { username } });
        const validation = comparePassword(password, data.password);

        if (data && validation) {
          const access_token = signToken({
            id: data.id,
            username: data.username,
          });

          res.status(201).json({ access_token });
        } else throw { name: "invalidUser" };
      } catch (error) {
        next(error);
      }
    }
  }
}
module.exports = ControllerUser;
