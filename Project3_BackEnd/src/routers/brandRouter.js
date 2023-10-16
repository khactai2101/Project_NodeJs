import * as controller from "../controllers";
import express from "express";
import checkAuth from "../middlewares/verifyToken";
import checkRole from "../middlewares/verifyRole";

const router = express.Router();

router.post("/", [checkAuth, checkRole], controller.createBrandController);
router.get("/", controller.getAllBrandController);
router.get("/:id", [checkAuth, checkRole], controller.getOneBrandController);
router.put("/:id", [checkAuth, checkRole], controller.updateBrandController);
router.delete("/:id", [checkAuth, checkRole], controller.deleteBrandController);

module.exports = router;
