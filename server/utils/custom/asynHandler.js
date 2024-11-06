import { message } from "./message.js";

export const asyncHandler = (asyncFunction) => {
  return async (req, res, next) => {
    try {
      await asyncFunction(req, res, next);
    } catch (error) {
    //   message({
    //     color: "red",
    //     message: error,
    //   });
      message({
        status: 500,
        color: "red",
        message: "Internal Server Error",
        res,
        success: false,
      });
    }
  };
};
