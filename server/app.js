const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const router = require("./routes");
const errHandler = require("./middelware/errHandler");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);
app.use(errHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
