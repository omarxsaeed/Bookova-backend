import { Router } from "express";
import { booksRouter } from "../components/books/index.js";
import { ordersRouter } from "../components/orders/index.js";
import { uploadsRouter } from "../components/uploads/index.js";
import usersRouter from "../components/user/index.js";

const router = Router();

// Test Route
router.get("/health", (req, res) => {
  res.json("Server's healthy and running ⚡!");
});

router.use("/users", usersRouter);
router.use("/books", booksRouter);
router.use("/orders", ordersRouter);
router.use("/uploads", uploadsRouter);
export default router;
