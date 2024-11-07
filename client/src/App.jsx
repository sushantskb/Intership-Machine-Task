import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Form from "./pages/Form";
import HomePage from "./pages/HomePage";
import EmployeeList from "./pages/EmployeeList";
import Login from "./pages/Auth/Login";
import { CheckToken } from "./middleware/checkToken";
import Validtor from "./middleware/Validtor";

export default function App() {
  const token = CheckToken();
  console.log("token", token);

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
            element={token ? <Navigate to={"/"} /> : <Login />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
