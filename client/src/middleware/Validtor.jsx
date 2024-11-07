import { Navigate, Outlet } from "react-router-dom";
import { CheckToken } from "./checkToken";

// eslint-disable-next-line react/prop-types
const Validtor = () => {
  const checkToken = CheckToken();
  return checkToken ? <Outlet /> : <Navigate to="/login" />;
};

export default Validtor;
