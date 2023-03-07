import { Router } from "express";
import * as uploadMiddleware from "../../middlewares/index.js";
import { upload as uploadController } from "./uploads.controller.js";

const router = Router();

router.post("/", uploadMiddleware.upload.array("images"), uploadController);

export default router;
