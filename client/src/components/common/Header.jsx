import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userNotExist } from "../../redux/reducers/userReducer";
import { persistor } from "../../redux/store";
const Header = () => {
  const username = localStorage.getItem("username");
  const dispatch = useDispatch();
  const [authPage, setAuthPage] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/login") {
      setAuthPage(true);
    } else {
      setAuthPage(false);
    }
  }, [location.pathname]);

  return (
    <>
      <header className="px-8 py-2">
        {/* Logo or Name */}
        <div className="flex-1">
          <span className="text-xl font-bold text-gray-800">Logo</span>
        </div>
      </header>
      {!authPage && (
        <header className="bg-slate-100 shadow-md px-44 py-4 flex justify-between items-center">
          {/* Navigation Links */}
          <div className="flex-1 flex justify-around">
            <Link
              to="/"
              className="text-lg text-gray-700 hover:text-gray-900 cursor-pointer">
              HOME
            </Link>
            <Link
              to="/employees-list"
              className="text-lg text-gray-700 hover:text-gray-900 cursor-pointer">
              Employee List
            </Link>
          </div>

          {/* User Name and Logout */}
          <div className="flex-1 flex justify-end items-center ">
            <span className="text-lg font-semibold text-gray-800 cursor-pointer mr-64">
              {username}
            </span>
            <button
              className="text-lg text-gray-700 hover:text-gray-900 -mx-28"
              onClick={() => {
                persistor.purge();
                dispatch(userNotExist());
              }}>
              Logout
            </button>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
