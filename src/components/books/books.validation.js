const addBook = {
  type: "object",
  required: [
    "author",
    "mainCategory",
    "subCategory",
    "title",
    "description",
    "pages",
    "condition",
    "availability",
  ],
  properties: {
    isbn: { type: "number" },
    author: { type: "string" },
    mainCategory: { type: "string" },
    subCategory: { type: "string" },
    title: { type: "string" },
    description: { type: "string" },
    pages: {
      type: "integer",
      minimum: 1,
    },
    images: {
      type: "array",
      items: {
        type: "string",
        format: "uri",
      },
      minItems: 3,
    },
    price: { type: "number", minimum: 0 },
    condition: { type: "string", enum: ["New", "Used"] },
    availability: {
      type: "string",
      enum: [
        "In Stock",
        "Out of Stock",
        "Available for borrowing",
        "Borrowed",
        "Available for donation",
        "Donated",
      ],
    },
    language: { type: "string" },
    publisher: { type: "string" },
    createdAt: { type: "string", format: "date-time" },
    updatedAt: { type: "string", format: "date-time" },
    location: { type: "string" },
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
    mainCategory: { type: "string" },
    subCategory: { type: "string" },
    title: { type: "string" },
    cover: { type: "string" },
    owner: { type: "string" },
    price: { type: "string" },
    condition: { type: "string" },
    availability: { type: "string" },
    language: { type: "string" },
    publisher: { type: "string" },
    createdAt: { type: "string", format: "date-time" },
    updatedAt: { type: "string", format: "date-time" },
    location: { type: "string" },
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
