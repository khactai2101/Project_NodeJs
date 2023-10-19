import * as controller from "../controllers";
import express from "express";
import checkAuth from "../middlewares/verifyToken";
import checkRole from "../middlewares/verifyRole";

const router = express.Router();

router.post("/", [checkAuth], controller.createOrderItem);
router.get("/", [checkAuth, checkRole], controller.getAllOrderItemController);
router.get("/one", [checkAuth], controller.getOneOrderItemByUser);

module.exports = router;
