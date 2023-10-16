import * as controller from "../controllers";
import express from "express";
import checkAuth from "../middlewares/verifyToken";
import checkRole from "../middlewares/verifyRole";

const router = express.Router();

router.post("/", [checkAuth], controller.createCartItemController);
router.get("/", controller.getAllCartItemController);
router.get(
  "/cartItemByUser",
  [checkAuth],
  controller.getAllCartItemByUserController
);

// router.get("/:id", [checkAuth, checkRole], controller.getOneCategoryController);
// router.put("/:id", [checkAuth, checkRole], controller.updateCategoryController);
// router.delete(
//   "/:id",
//   [checkAuth, checkRole],
//   controller.deleteCategoryController
// );

module.exports = router;
