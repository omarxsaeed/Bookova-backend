import { CustomError, errors } from "../utils/errors.js";

const granted = (allowedRoles) => (req, res, next) => {
  try {
    const requesterRole = req.requester.role;
    const isAllowed = allowedRoles.includes(requesterRole);
    if (!isAllowed) {
      throw new CustomError(errors.NOT_AUTHORIZED, 401);
    }
    next();
  } catch (err) {
    next(err);
  }
};

export { granted };
