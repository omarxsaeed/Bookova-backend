import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  isbn: { type: Number, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  title: { type: String, required: true },
  cover: {
    type: String,
    default:
      "https://images.manning.com/360/480/resize/book/9/be0e700-8ac5-44b7-92fc-0a0d250969be/Cantelon-Node-2ed.png",
  },
  owner: { type: String, required: true },
  price: { type: Number, required: true },
  condition: { type: String, enum: ["New", "Used"], required: true },
  availability: { type: String, enum: ["In Stock", "Out of Stock", "Available for borrowing", "Borrowed"] },
});

const Book = mongoose.model("Book", bookSchema);

export default Book;
