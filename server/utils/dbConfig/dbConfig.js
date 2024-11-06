import mongoose from "mongoose";
import { asyncHandler } from "../custom/asynHandler.js";
import { message } from "../custom/message.js";

export const dbConfig = asyncHandler(async (req, res) => {
 await mongoose.connect(process.env.MONGODB)
 message({
    color: "blue",
    message: "Connected to DB"
 })
});
