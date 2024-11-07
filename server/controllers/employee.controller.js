import { Employee } from "../models/employee.model.js";
import { asyncHandler } from "../utils/custom/asynHandler.js";
import { message } from "../utils/custom/message.js";

export const createEmployee = asyncHandler(async (req, res) => {
  const params = req.body;
  if (!params.name || !params.email || !params.designation || !params.phone) {
    return message({
      status: 400,
      success: false,
      message: "Required fields are empty",
      res,
    });
  }
  await Employee.create(params);
  return message({
    success: true,
    status: 201,
    message: "Employee Added",
    res,
  });
});
