import express from "express";
const router = express.Router();
import userServices from "./user.services.js";
// import userValidator from "./userValidation.js";

router.get("/", async (req, res) => {
  await userServices.getAllUser();
});
router.post("/signup", async (req, res) => {
  await userServices.addUser(req.body);
  console.log(req.body);
  res.send(req.body);
});

// router.post("/signup", function (res, req) {
//   res.send("Hello");
// });

export default router;
