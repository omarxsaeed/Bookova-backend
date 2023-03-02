import jwt from "jsonwebtoken";
import config from "config";
import { CustomError } from "../utils/error";

const createToken = (payload) => {
  try {
    const token = jwt.sign(payload, config.get("jwt.secret"), { expiresIn: config.get("jwt.expiresIn") });
    return token;
  } catch (err) {
    throw new CustomError(err, 401);
  }
};

const decodeToken = (token) => {
  try {
    const decodedToken = jwt.verify(token, config.get("jwt.secret"));
    return decodedToken;
  } catch (err) {
    throw new CustomError(err, 401);
  }
};

export default {
  createToken,
  decodeToken,
};
