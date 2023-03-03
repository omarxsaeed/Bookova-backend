import mongoose from "mongoose";

// user to a user ref, and do the img upload, add the library id

const bookSchema = new mongoose.Schema({
  isbn: { type: Number },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  title: { type: String, required: true },
  pages: { type: Number, required: true },
  images: {
    type: [String],
    default:
      "https://images.manning.com/360/480/resize/book/9/be0e700-8ac5-44b7-92fc-0a0d250969be/Cantelon-Node-2ed.png",
    min: 3,
  },
  owner: { type: String, required: true },
  price: { type: Number, required: true },
  condition: { type: String, enum: ["New", "Used"], required: true },
  availability: {
    type: String,
    enum: [
      "In Stock",
      "Out of Stock",
      "Available for borrowing",
      "Borrowed",
      "Available for donation",
      "Donated",
    ],
  },
  isApproved: { type: Boolean, default: false },
  publicationDate: { type: Date },
  language: { type: String },
  publisher: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  location: { type: String },
});

const Book = mongoose.model("Book", bookSchema);

export default Book;
