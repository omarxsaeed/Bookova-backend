const addBook = {
  type: "object",
  required: ["isbn", "author", "genre", "title", "owner", "price", "condition"],
  properties: {
    isbn: { type: "string" },
    author: { type: "string" },
    genre: { type: "string" },
    title: { type: "string" },
    cover: { type: "string" },
    owner: { type: "string" },
    price: { type: "string" },
    condition: { type: "string" },
    availability: { type: "string" },
  },
  additionalProperties: false,
};

const updateBookInfo = {
  type: "object",
  required: ["bookId"],
  properties: {
    bookId: { type: "string" },
    isbn: { type: "string" },
    author: { type: "string" },
    genre: { type: "string" },
    title: { type: "string" },
    cover: { type: "string" },
    owner: { type: "string" },
    price: { type: "string" },
    condition: { type: "string" },
    availability: { type: "string" },
  },
  // additionalProperties: false,
};

const deleteBook = {
  type: "object",
  properties: {
    bookId: { type: "string" },
  },
};

export { addBook, updateBookInfo, deleteBook };
