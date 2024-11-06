import { Navigate } from "react-router-dom";
import { CheckToken } from "./checkToken";

// eslint-disable-next-line react/prop-types
const Validtor = ({ children }) => {
  const checkToken = CheckToken();
  return checkToken ? children : <Navigate to="/login" />;
};

export default Validtor;
