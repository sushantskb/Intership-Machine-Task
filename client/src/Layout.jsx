import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const Layout = () => {
  return (
    <div className="bg-gradient-to-r from-[#314755] to-[#26a0da]">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
