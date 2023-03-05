import { Router } from "express";
import { booksRouter } from "../components/books/index.js";
import { bookstoresRouter } from "../components/bookstores/index.js";

const router = Router();

// Test Route
router.get("/health", (req, res) => {
  res.json("Server's healthy and running ⚡!");
});

router.use("/books", booksRouter);
router.use("/bookstores", bookstoresRouter);
export default router;
