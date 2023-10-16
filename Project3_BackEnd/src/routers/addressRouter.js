import * as controller from "../controllers";
import express from "express";
import verifyToken from "../middlewares/verifyToken";
import verifyRole from "../middlewares/verifyRole";

const router = express.Router();

router.post("/", [verifyToken], controller.createAddressController);
router.get("/", [verifyToken, verifyRole], controller.getAllAddressController);
router.get(
  "/addressByUser",
  [verifyToken],
  controller.getAllAddressByUserController
);
router.get("/:id", [verifyToken], controller.getOneAddressController);

router.put("/:id", [verifyToken], controller.updateAddressController);
router.delete("/:id", [verifyToken], controller.deleteAddressController);

module.exports = router;
