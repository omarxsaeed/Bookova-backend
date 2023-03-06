import express from "express";
const router = express.Router();
import validateSchema from "../../helpers/validateSchema.js";
import * as userController from "./user.controller.js";
import * as userValidation from "./user.validation.js";

router.post("/signup", validateSchema(userValidation.signUp, "body"), userController.register);
router.post("/verify", validateSchema(userValidation.verifyUser, "body"), userController.verify);
router.post("/signin", validateSchema(userValidation.signIn, "body"), userController.login);
router.put("/edit", validateSchema(userValidation.editUser, "body"), userController.editUser);
router.delete("/delete", validateSchema(userValidation.deleteUser, "body"), userController.deleteUser);

export default router;
