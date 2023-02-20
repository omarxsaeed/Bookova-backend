import Ajv from "ajv";
import addFormats from "ajv-formats";
import { CustomError } from "../utils/errors.js";

const ajv = new Ajv({ allErrors: true });
addFormats(ajv);

const validateSchema = (schema, property) => {
  // console.log(schema, property);
  return (req, res, next) => {
    if (!req[property]) {
      req[property] = {};
    }

    const validate = ajv.compile(schema);
    const valid = validate(req[property]);
    if (!valid) {
      const errors = validate.errors.map((error) => error.message);
      const err = new CustomError(errors, 400);
      next(err);
    }
    next();
  };
};

export default validateSchema;
