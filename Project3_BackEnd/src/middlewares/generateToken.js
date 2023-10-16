import jwt from "jsonwebtoken";
require("dotenv").config();

const generateAccessToken = (id, fullName, email, roleId) =>
  jwt.sign({ id, fullName, email, roleId }, process.env.ACCESS_TOKEN_SCERET);
module.exports = {
  generateAccessToken,
};
