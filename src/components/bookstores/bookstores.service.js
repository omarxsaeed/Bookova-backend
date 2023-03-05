import Bookstore from "./bookstores.model.js";

const getBookstore = async (bookstoreId) => {
  const bookstore = Bookstore.findById(bookstoreId);
  return bookstore;
};

const addBookstore = async (bookstoreInfo) => {
  const bookstore = Bookstore.create(bookstore);
  return bookstore;
};

export { getBookstore, addBookstore };
