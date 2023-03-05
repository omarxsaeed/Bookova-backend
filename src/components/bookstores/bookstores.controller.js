import respondWith from "../../utils/response.js";
import * as bookstoreService from "./bookstores.service.js";

const addBookstore = async (req, res, next) => {
  try {
    // get the book info.
    const bookstoreInfo = req.body;

    // check if the user already added the book before or not.

    const book = await bookstoreService.addBookstore(bookstoreInfo);

    return respondWith(201, {}, `Your Bookstore has been added successfully!`, true, res);
  } catch (err) {
    next(err);
  }
};
