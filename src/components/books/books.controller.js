import { CustomError, errors } from "../../utils/errors.js";
import respondWith from "../../utils/response.js";
import * as booksService from "./books.service.js";

const getBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = await booksService.getBook(id);
    if (book) return respondWith(200, book, "Got your book right here!.", true, res);
    else throw new CustomError(errors.NOT_FOUND, 404);
  } catch (err) {
    next(err);
  }
};

const getAllBooks = async (req, res, next) => {
  try {
    const books = await booksService.getAllBooks();
    return respondWith(200, books, "Got ya all books.", true, res);
  } catch (err) {
    next(err);
  }
};

const addBook = async (req, res, next) => {
  try {
    // get the book info.
    const bookInfo = req.body;

    // check if the user already added the book before or not.

    const book = await booksService.addBook(bookInfo);

    return respondWith(201, {}, `Your Book ${book.title} has been added successfully!`, true, res);
  } catch (err) {
    next(err);
  }
};

const updateBookInfo = async (req, res, next) => {
  try {
    const bookInfo = req.body;
    const book = await booksService.getBook(bookInfo.bookId);

    if (!book) {
      throw new CustomError(errors.NOT_FOUND, 403);
    }

    await booksService.updateBookInfo(bookInfo);
    return respondWith(201, {}, "Your book information has been updated successfully", true, res);
  } catch (err) {
    next(err);
  }
};

const deleteBook = async (req, res, next) => {
  try {
    const { bookId } = req.body;
    const book = await booksService.getBook(bookId);

    if (!book) {
      throw new CustomError(errors.NOT_FOUND, 403);
    }
    await booksService.deleteBook(bookId);
    return respondWith(200, {}, "Your book has been deleted successfully", true, res);
  } catch (err) {
    next(err);
  }
};

export { getBook, getAllBooks, addBook, updateBookInfo, deleteBook };
