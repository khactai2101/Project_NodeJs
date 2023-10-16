import * as controller from "../controllers";
import express from "express";

const router = express.Router();

router.post("/register", controller.registerController);
router.post("/login", controller.loginController);

module.exports = router;
