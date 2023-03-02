import { customAlphabet } from "nanoid";
import { encryptPassword, comparePasswords } from "../../helpers/bcrypt";
import { addToDate, isDateInThePast } from "../../helpers/date";
import { createToken } from "../../helpers/jwt";
import { userToken } from "../../helpers/tokens";
import { CustomError } from "../../utils/errors";
import respondWith from "../../utils/response";
import userServices from "./user.services";

const register = async (req, res, next) => {
  try {
    const userData = req.body;

    const isRegistered = await userServices.getUser(userData.email);
    if (isRegistered) {
      throw new CustomError(errors.ALREADY_EXIST, 409);
    }

    // hash the user's password
    const hashedPassword = await encryptPassword(userData.password);
    userData.password = hashedPassword;

    // adding user's verification code
    const alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const nanoid = customAlphabet(alphabet, 6);
    const verificationCode = nanoid();
    userInfo.verificationCode = verificationCode;
  } catch (err) {
    next(err);
  }
};
