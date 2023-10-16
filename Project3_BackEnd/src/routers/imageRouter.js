import * as controller from "../controllers";
import express from "express";
import checkAuth from "../middlewares/verifyToken";
import checkRole from "../middlewares/verifyRole";
import uploadCloud from "../middlewares/uploadFile";

const router = express.Router();

router.post(
  "/",
  [checkAuth, checkRole],
  uploadCloud.array("src", 3),
  controller.createImageController
);

router.get("/", [checkAuth, checkRole], controller.getAllImageController);
router.get("/:id", [checkAuth, checkRole], controller.getOneImageController);
router.put(
  "/:id",
  uploadCloud.single("src"),
  [checkAuth, checkRole],
  controller.updateImageController
);
router.delete("/:id", [checkAuth, checkRole], controller.deleteImageController);

module.exports = router;
