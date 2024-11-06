import express from "express";
import { getData, test, testSignToken } from "../controllers/test.controller.js";
import { verfiyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/", test);
router.post("/jwt", testSignToken);
router.get("/data", verfiyToken, getData)
export { router as testRouter };
