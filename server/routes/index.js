import express from "express";
import authRouter from "./auth.routes.js";
import employeeRouter from "./employee.routes.js";
const router = express.Router();

router.use("/api/v1/auth", authRouter);
router.use("/api/v1/employee", employeeRouter);

export default router;
