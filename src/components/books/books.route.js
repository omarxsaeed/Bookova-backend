import { Router } from "express";
import { isAuth, validateSchema } from "../../middlewares/index.js";
import * as booksController from "./books.controller.js";
import * as booksValidation from "./books.validation.js";

const router = Router();

router.get("/all", booksController.getAllBooks);
router.get("/:id", booksController.getBook);
router.post("/", validateSchema(booksValidation.addBook, "body"), booksController.addBook);
router.post("/:id/approve", booksController.approveBook);
router.put("/", validateSchema(booksValidation.updateBookInfo, "body"), booksController.updateBookInfo);
router.delete("/", validateSchema(booksValidation.deleteBook, "body"), booksController.deleteBook);

export default router;
