import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Website from "./pages/Website";
import Form from "./pages/Form";
import { CheckToken } from "./middleware/checkToken";
import Validtor from "./middleware/Validtor";
import { useEffect } from "react";
import { isTokenExpired } from "./middleware/tokenExpiry";
import { useDispatch, useSelector } from "react-redux";
import { userNotExist } from "./redux/reducers/testReducer";
import { persistor } from "./redux/store";

export default function App() {
  const checkToken = CheckToken();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.testReducer);
  useEffect(() => {
    const tokenExpired = isTokenExpired(user);
    if (tokenExpired) {
      console.log("Token expired. Please Login");
      persistor.purge();
      dispatch(userNotExist());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <Validtor>
                <Website />
              </Validtor>
            }
          />
        </Route>
        <Route
          path="/login"
          element={!checkToken ? <Form /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}
