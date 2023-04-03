const router = require("express").Router();
const routerUser = require("./user");

router.use("/user", routerUser);

module.exports = router;
