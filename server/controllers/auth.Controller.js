import bcryptjs from "bcryptjs";
import { asyncHandler } from "../utils/custom/asynHandler.js"; // my custom handler with wrap the function into a try catch block
import { message } from "../utils/custom/message.js"; // my custom message function
import { signToken } from "../utils/features/signToken.js"; // my custom function to generate a jwt token
import { User } from "../models/user.model.js";

export const login = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return message({
      status: 400,
      success: true,
      message: "Required fields are empty",
      res,
    });
  }
  const user = await User.findOne({username});
  if (!user) {
    return message({
      status: 404,
      success: false,
      message: "No user found with this username",
      res,
    });
  }
  const isMatch = await bcryptjs.compare(password, user.password);
  if (isMatch) {
    const token = await signToken(user._id, "1D");
    return message({
      status: 200,
      success: true,
      message: "Logged In",
      res,
      responseData: { token, userName: user.username },
    });
  } else {
    return message({
      status: 401,
      success: false,
      message: "Invalid Password",
      res,
    });
  }
});
