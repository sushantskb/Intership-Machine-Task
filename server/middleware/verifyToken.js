import jwt from "jsonwebtoken";
import Test from "../models/test.model.js";
import { asyncHandler } from "../utils/custom/asynHandler.js";
import { message } from "../utils/custom/message.js";

export const verfiyToken = asyncHandler(async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    message({
      status: 401,
      message: "Authentication Error",
      success: false,
      res,
    });
  }
  const token = authHeader.split(" ")[1];
  const decoded = await jwt.verify(token, process.env.JWT_SECRET);

  req.user = await Test.findById(decoded.userId).select("-password");

  if (!req.user) {
    message({
      status: 401,
      message: "Invalid Token",
      success: false,
      res,
    });
  }

  next();
});
