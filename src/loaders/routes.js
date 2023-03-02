import { Router } from "express";
import { booksRouter } from "../components/books/index.js";
import { ordersRouter } from "../components/orders/index.js";

const router = Router();

// Test Route
router.get("/health", (req, res) => {
  res.json("Server's healthy and running ⚡!");
});

router.use("/books", booksRouter);
router.use("/orders", ordersRouter);

export default router;
