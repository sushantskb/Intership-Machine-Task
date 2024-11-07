import express from "express";
import { verfiyToken } from "../middleware/verifyToken.js"; // my custom token verification middleware
import {
  createEmployee,
  getAllEmployees,
} from "../controllers/employee.controller.js";

const employeeRouter = express.Router();

employeeRouter.post("/create", verfiyToken, createEmployee);
employeeRouter.get("/", verfiyToken, getAllEmployees);

export default employeeRouter;
