import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Form from "./pages/Form";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/create-employee" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
