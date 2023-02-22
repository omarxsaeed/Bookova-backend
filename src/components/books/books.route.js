import { Router } from "express";
import validateSchema from "../../helpers/validateSchema.js";
import * as booksController from "./books.controller.js";
import * as booksValidation from "./books.validation.js";

const router = Router();

router.get("/", booksController.getAllBooks);
router.post("/", validateSchema(booksValidation.addBook, "body"), booksController.addBook);
router.put("/", validateSchema(booksValidation.updateBookInfo, "body"), booksController.updateBookInfo);
router.delete("/", validateSchema(booksValidation.deleteBook, "body"), booksController.deleteBook);
export default router;
