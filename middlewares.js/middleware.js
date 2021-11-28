const jwt = require("jsonwebtoken");
const verifyToken = (req, res, next) => {
  const token = req.headers.Authrization.split("")[1];
  console.log("token:", token);
  const key = jwt.verify(token, process.env.private_key);
  console.log("key:", key);
  next();
};

module.exports = {
  verifyToken,
};