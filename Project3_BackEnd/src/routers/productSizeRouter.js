import * as controller from "../controllers";
import express from "express";
import checkAuth from "../middlewares/verifyToken";
import checkRole from "../middlewares/verifyRole";

const router = express.Router();

router.post(
  "/",
  [checkAuth, checkRole],
  controller.createProductSizeController
);

router.get("/", controller.getAllProductSizeController);
router.get("/:id", controller.getOneProductController);
// router.put("/:id", [checkAuth, checkRole], controller.updateProductController);
// router.delete(
//   "/:id",
//   [checkAuth, checkRole],
//   controller.deleteProductController
// );

module.exports = router;
