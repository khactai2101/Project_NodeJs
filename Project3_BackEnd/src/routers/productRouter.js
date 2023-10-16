import * as controller from "../controllers";
import express from "express";
import checkAuth from "../middlewares/verifyToken";
import checkRole from "../middlewares/verifyRole";

const router = express.Router();

router.post("/", [checkAuth, checkRole], controller.createProductController);

router.get("/", controller.getAllProductController);
router.get("/:id", controller.getOneProductController);
router.put("/:id", [checkAuth, checkRole], controller.updateProductController);
router.delete(
  "/:id",
  [checkAuth, checkRole],
  controller.deleteProductController
);

module.exports = router;
