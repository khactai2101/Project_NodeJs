import * as controller from "../controllers";
import express from "express";
import checkAuth from "../middlewares/verifyToken";
import checkRole from "../middlewares/verifyRole";

const router = express.Router();

router.post("/", [checkAuth], controller.createCart);
router.get("/", controller.getAllCart);
router.get("/one", [checkAuth], controller.getAllCartByUser);
// // router.put("/:id", [checkAuthentication], controller.updateAddress);
router.delete("/:id", [checkAuth], controller.deleteCart);

module.exports = router;
