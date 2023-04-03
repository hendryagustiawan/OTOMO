const errHandlers = (err, req, res, next) => {
  let statusCode;
  let errMessage;

  switch (err.name) {
    case "SequelizeValidationError":
    case "SequelizeUniqueConstraintError":
      statusCode = 400;
      errMessage = err.errors.map((el) => {
        return el.message;
      });
      break;

    case "password & username is required":
      statusCode = 400;
      errMessage = `Username and Password is required`;
      break;

    case "username is required":
      statusCode = 400;
      errMessage = `Username is required`;
      break;

    case "password is required":
      statusCode = 400;
      errMessage = `Password is required`;
      break;

    default:
      statusCode = 500;
      errMessage = "Internal Server Error";
  }
  res.status(statusCode).json({ message: errMessage });
};

module.exports = errHandlers;
