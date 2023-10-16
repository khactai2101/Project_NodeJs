import * as controller from "../controllers";
import express from "express";

import checkAuth from "../middlewares/verifyToken";

import checkRole from "../middlewares/verifyRole";
// import uploadCloud from "../middlewares/uploadFile";

const router = express.Router();

router.get("/", [checkAuth, checkRole], controller.getAllUserController);
router.get("/profile", [checkAuth], controller.getOneUserController);
router.put("/updateUser", [checkAuth], controller.updateUserController);
router.delete("/:id", [checkAuth, checkRole], controller.deleteUserController);

module.exports = router;
