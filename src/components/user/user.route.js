import express from "express";
const router = express.Router();
import validateSchema from "../../helpers/validateSchema.js";
import * as userController from "./user.controller.js";
import * as userValidation from "./user.validation.js";

router.post("/signup", userController.register);
router.post("/signin", userController.login);
router.put("/edit", userController.editUser);
router.delete("/delete", userController.deleteUser);
router.post("/verigy", userController.verify);

export default router;
