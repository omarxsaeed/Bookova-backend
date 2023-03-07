import { Router } from "express";

import { isAuth, validateSchema } from "../../middlewares/index.js";
import * as ordersController from "./orders.controller.js";
import * as ordersValidation from "./orders.validation.js";

const router = Router();

router.get("/", ordersController.getOrder);
router.get("/all", ordersController.getAllOrders);
router.post("/", validateSchema(ordersValidation.makeOrder, "body"), ordersController.makeOrder);

export default router;
