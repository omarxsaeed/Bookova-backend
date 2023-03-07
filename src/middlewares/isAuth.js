import { decodeToken } from "../helpers/jwt.js";
import { CustomError, errors } from "../utils/errors.js";

const isAuth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw new CustomError(errors.TOKEN_NOT_AUTHENTICATED, 401);
    } else {
      const token = authHeader.split("Bearer ")[1] ?? authHeader;
      const decodedToken = decodeToken(token);
      req.requester = decodedToken;
      return next();
    }
  } catch (err) {
    next(err);
  }
};

export { isAuth };
