import { useSelector } from "react-redux";

export const CheckToken = () => {
  const { user } = useSelector((state) => state.testReducer);
  if (user) {
    return true;
  } else {
    return false;
  }
};
