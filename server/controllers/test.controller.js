import Test from "../models/test.model.js";
import { asyncHandler } from "../utils/custom/asynHandler.js";
import { message } from "../utils/custom/message.js";
import { signToken } from "../utils/features/signToken.js";

export const test = asyncHandler(async (req, res) => {
  return message({
    status: 200,
    message: "Welcome to the test route!!",
    res,
    success: true,
  });
});

export const testSignToken = asyncHandler(async (req, res) => {
  const { name } = req.body;
  const data = await Test.create({
    name,
  });
  const token = await signToken(data._id, "1h");
  return message({
    status: 201,
    message: "Token signed",
    res,
    success: true,
    responseData: token,
  });
});

export const getData = asyncHandler(async (req, res) => {
  const id = req.user;
  const data = await Test.findById(id);
  return message({
    status: 200,
    success: true,
    res,
    responseData: data,
  });
});
