import { handleError } from "../utils/errors.js";

const mainErrorHandler = (app) => {
  app.use((err, req, res, next) => {
    handleError(err, res);
  });
};

export default mainErrorHandler;
