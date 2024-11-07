import { useSelector } from "react-redux";

export const CheckToken = () => {
  const { token } = useSelector((state) => state.userReducer);
  if (token) {
    return true;
  } else {
    return false;
  }
};
