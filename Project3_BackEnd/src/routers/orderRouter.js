import * as controller from "../controllers";
import express from "express";
import checkAuth from "../middlewares/verifyToken";
import checkRole from "../middlewares/verifyRole";

const router = express.Router();

router.post("/", [checkAuth], controller.createOrderController);
router.get("/", [checkAuth], controller.getAllOrderController);
// router.get("/one", [checkAuthentication], controller.getAllOrderByUser);

module.exports = router;
