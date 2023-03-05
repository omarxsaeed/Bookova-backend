import { Router } from "express";
import { upload as uploadMiddleware } from "../../middlewares/index.js";
import { upload as uploadController } from "./uploads.controller.js";

const router = Router();

router.post("/", uploadMiddleware.single("file"), uploadController);

export default router;
