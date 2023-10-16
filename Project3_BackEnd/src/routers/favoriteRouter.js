import * as controller from "../controllers";
import express from "express";
import checkAuth from "../middlewares/verifyToken";
import checkRole from "../middlewares/verifyRole";

const router = express.Router();

router.post("/", [checkAuth], controller.createFavoriteController);
router.get("/", controller.getAllFavoritesController);
router.get("/favoriteMe", [checkAuth], controller.getFavoriteByUserController);
router.delete(
  "/favoriteMe/:id",
  [checkAuth],
  controller.deleteFavoriteController
);

module.exports = router;
