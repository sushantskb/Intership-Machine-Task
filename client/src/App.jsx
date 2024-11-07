import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Form from "./pages/Form";
import HomePage from "./pages/HomePage";
import EmployeeList from "./pages/EmployeeList";
import Login from "./pages/Auth/Login";
import { CheckToken } from "./middleware/checkToken";
import Validtor from "./middleware/Validtor";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isTokenExpired } from "./middleware/tokenExpiry";
import { persistor } from "./redux/store";
import { userNotExist } from "./redux/reducers/userReducer";

export default function App() {
  const checkToken = CheckToken();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.userReducer);
  useEffect(() => {
    const tokenExpired = isTokenExpired(token);
    if (tokenExpired) {
      console.log("Token Expired");
      persistor.purge();
      dispatch(userNotExist());
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<Validtor />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/create-employee" element={<Form />} />
            <Route path="/employees-list" element={<EmployeeList />} />
          </Route>
          <Route
            path="/login"
            element={checkToken ? <Navigate to={"/"} /> : <Login />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
