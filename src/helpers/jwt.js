import jwt from "jsonwebtoken";
import { CustomError } from "../utils/error";

const createToken = (payload) => {
  try {
    const token = jwt.sign(payload, "SecretCode", { expiresIn: "10m" });
    return token;
  } catch (err) {
    throw new CustomError(err, 401);
  }
};

const decodeToken = (token) => {
  try {
    const decodedToken = jwt.verify(token, "SecretCode");
    return decodedToken;
  } catch (err) {
    throw new CustomError(err, 401);
  }
};

export default {
  createToken,
  decodeToken,
};
