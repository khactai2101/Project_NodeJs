import * as controller from "../controllers";
import express from "express";
import checkAuth from "../middlewares/verifyToken";
import checkRole from "../middlewares/verifyRole";

const router = express.Router();

router.post("/", [checkAuth, checkRole], controller.createCategoryController);
router.get("/", controller.getAllCategoriesController);
router.get("/:id", [checkAuth, checkRole], controller.getOneCategoryController);
router.put("/:id", [checkAuth, checkRole], controller.updateCategoryController);
router.delete(
  "/:id",
  [checkAuth, checkRole],
  controller.deleteCategoryController
);

module.exports = router;
