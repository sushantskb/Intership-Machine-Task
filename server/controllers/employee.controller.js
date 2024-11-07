import { Employee } from "../models/employee.model.js";
import { asyncHandler } from "../utils/custom/asynHandler.js";
import { generateNumberAsString } from "../utils/custom/generateId.js";
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
  const empId = await generateNumberAsString();
  await Employee.create({ ...params, id: empId });
  return message({
    success: true,
    status: 201,
    message: "Employee Added",
    res,
  });
});

export const getAllEmployees = asyncHandler(async (req, res) => {
  const page = req.query.page;
  const limit = 4;
  const skip = (page - 1) * limit;
  const employees = await Employee.find({}).skip(skip).limit(limit);
  const pageCount = await Employee.countDocuments({});
  return message({
    status: 200,
    success: true,
    res,
    responseData: { employees, pageCount: Math.ceil(pageCount / limit) },
  });
});

export const deleteEmployee = asyncHandler(async (req, res) => {
  const empId = req.body.empId;
  if (!empId) {
    return message({
      status: 404,
      success: false,
      message: "Invlaid Id or Employee Not Found",
      res,
    });
  }
  await Employee.findByIdAndDelete(empId);

  return message({
    status: 200,
    success: true,
    message: "Deleted",
    res,
  });
});
