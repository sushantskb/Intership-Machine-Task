import express from "express";
import { verfiyToken } from "../middleware/verifyToken.js"; // my custom token verification middleware
import {
  createEmployee,
  deleteEmployee,
  editEmployee,
  getAllEmployees,
  getEmployeeById,
} from "../controllers/employee.controller.js";

const employeeRouter = express.Router();

employeeRouter.post("/create", verfiyToken, createEmployee);
employeeRouter.get("/", verfiyToken, getAllEmployees);
employeeRouter.get("/emp", verfiyToken, getEmployeeById);
employeeRouter.post("/delete", verfiyToken, deleteEmployee);
employeeRouter.post("/edit", verfiyToken, editEmployee);

export default employeeRouter;
