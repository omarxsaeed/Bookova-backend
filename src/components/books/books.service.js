import Book from "./books.model.js";

const getBook = async (bookId) => {
  const book = await Book.findById(bookId);
  return book;
};

const getAllBooks = async () => {
  const books = await Book.find();
  return books;
};

const addBook = async (bookInfo) => {
  const book = await Book.create(bookInfo);
  return book;
};

const updateBookInfo = async (bookInfo) => {
  const book = await Book.findOneAndUpdate({ _id: bookInfo.bookId }, bookInfo);
  return book;
};

const deleteBook = async (bookId) => {
  const deleteResult = await Book.deleteOne({ _id: bookId });
  return deleteResult;
};

export { getBook, getAllBooks, addBook, updateBookInfo, deleteBook };
