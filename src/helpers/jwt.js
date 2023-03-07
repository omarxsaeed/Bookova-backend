import jwt from "jsonwebtoken";
import config from "../config/index.js";
import { CustomError } from "../utils/errors.js";

const createToken = (payload) => {
  try {
    const token = jwt.sign(payload, config.jwt.secret, { expiresIn: config.jwt.expiresIn });
    return token;
  } catch (err) {
    throw new CustomError(err, 401);
  }
};

const decodeToken = (token) => {
  try {
    const decodedToken = jwt.verify(token, config.jwt.secret);
    return decodedToken;
  } catch (err) {
    throw new CustomError(err, 401);
  }
};

export { createToken, decodeToken };
