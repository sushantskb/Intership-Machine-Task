import chalk from "chalk";

export const message = ({
  status = null,
  color = "white",
  message = null,
  res = null,
  success = null,
  responseData = null,
} = {}) => {
  let response = {};
  if (!status || !res) {
    console.log(chalk[color](message));
  } else {
    if (message === null) {
      response = {
        success: success,
      };
    } else {
      response = {
        success: success,
        message: message,
      };
    }

    if (responseData) {
      response.responseData = responseData;
    }
    res.status(status).json(response);
  }
};
