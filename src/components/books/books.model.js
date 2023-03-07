import mongoose from "mongoose";

// user to a user ref, and do the img upload, add the library id

const bookSchema = new mongoose.Schema({
  isbn: { type: Number },
  author: { type: String, required: true },
  mainCategory: { type: String, required: true },
  subCategory: { type: String, required: true },
  title: { type: String, required: true },
  pages: { type: Number, required: true },
  images: {
    type: [String],
    default:
      "https://images.manning.com/360/480/resize/book/9/be0e700-8ac5-44b7-92fc-0a0d250969be/Cantelon-Node-2ed.png",
    min: 3,
  },
  owner: { type: mongoose.SchemaTypes.ObjectId, ref: "User", required: true },
  price: { type: Number },
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
    required: true,
  },
  isApproved: { type: Boolean, default: false },
  language: { type: String },
  publisher: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  location: { type: String },
});

const Book = mongoose.model("Book", bookSchema);

export default Book;
