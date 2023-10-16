import * as controller from "../controllers";
import express from "express";
import checkAuth from "../middlewares/verifyToken";
import checkRole from "../middlewares/verifyRole";
const router = express.Router();

router.post("/", [checkAuth, checkRole], controller.createSizeController);
router.get("/", [checkAuth, checkRole], controller.getAllSizeController);
router.get("/:id", [checkAuth, checkRole], controller.getOneSizeController);
router.put("/:id", [checkAuth, checkRole], controller.updateSizeController);
router.delete("/:id", [checkAuth, checkRole], controller.deleteSizeController);

module.exports = router;
