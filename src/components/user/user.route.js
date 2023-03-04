import express from "express";
const router = express.Router();
import validateSchema from "../../helpers/validateSchema.js";
// import { login } from "./user.controller.js";
// import { signIn } from "./user.validation";
import * as userController from "./user.controller";
import * as userValidation from "./user.validation";

// router.post("/signup", validateSchema(userValidation.signUp, "body"), userController.register);
// router.post("/signin", validateSchema(userValidation.signIn, "body"), userController.login);
// router.put("/edit", validateSchema(userValidation.editUser, "body"), userController.editUser);
// router.delete("/delete", validateSchema(userValidation.deleteUser, "body"), userController.deleteUser);

// router.put("/edit", async (req, res) => {
//   await userServices.editUser(req.body);
// });

// router.delete("/delete", async (req, res) => {
//   await userServices.deleteUser(req.body);
// });

export default router;
