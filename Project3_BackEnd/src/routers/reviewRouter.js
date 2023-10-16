import * as controller from "../controllers";
import express from "express";
import checkAuth from "../middlewares/verifyToken";
import checkRole from "../middlewares/verifyRole";

const router = express.Router();

router.post("/", [checkAuth], controller.createReviewController);
router.get("/", [checkAuth], controller.getAllReviewsController);
router.get("/:id", controller.getOneReviewController);
router.put("/:id", controller.updateReviewController);
router.delete("/:id", controller.deleteReviewController);

module.exports = router;
