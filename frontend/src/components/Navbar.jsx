import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { token, setToken, userData } = useContext(AppContext);
  const [showMenu, setShowMenu] = useState(false);

  const logout = () => {
    setToken(false);
    localStorage.removeItem("token");
  };

  return (
    <div className="flex items-center justify-between py-5 mb-5 text-sm border-b border-b-gray-400 sm:px-10">
      <img
        onClick={() => navigate("/")}
        className="cursor-pointer w-44"
        src={assets.logo}
        alt=""
      />
      <ul id="navbar" className="flex items-center gap-5 font-medium">
        <NavLink to="/">
          {({ isActive }) => (
            <li className="text-center ">
              <div className="py-1">HOME</div>
              <hr
                className={`h-0.5 w-3/5 m-auto border-none outline-none ${isActive ? "bg-primary" : "hidden"}`}
              />
            </li>
          )}
        </NavLink>
        <NavLink to="/doctors">
          {({ isActive }) => (
            <li className="text-center">
              <div className="py-1">ALL DOCTORS</div>
              <hr
                className={`h-0.5 w-3/5 m-auto border-none outline-none ${isActive ? "bg-primary" : "hidden"}`}
              />
            </li>
          )}
        </NavLink>
        <NavLink to="/about">
          {({ isActive }) => (
            <li className="text-center">
              <div className="py-1">ABOUT</div>
              <hr
                className={`h-0.5 w-3/5 m-auto border-none outline-none ${isActive ? "bg-primary" : "hidden"}`}
              />
            </li>
          )}
        </NavLink>
        <NavLink to="/contact">
          {({ isActive }) => (
            <li className="text-center">
              <div className="py-1">CONTACT</div>
              <hr
                className={`h-0.5 w-3/5 m-auto border-none outline-none ${isActive ? "bg-primary" : "hidden"}`}
              />
            </li>
          )}
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {token && userData ? (
          <div className="relative flex items-center gap-2 cursor-pointer group">
            <img className="w-8 rounded-full" src={userData.image} alt="" />
            <img className="w-2.5" src={assets.dropdown_icon} alt="" />
            <div className="absolute right-0 z-20 invisible px-4 py-2 text-base font-medium text-gray-600 transition-all duration-200 ease-in-out bg-white rounded-lg shadow-md opacity-0 top-12 group-hover:opacity-100 group-hover:visible">
              <div className="flex flex-col gap-4 p-4 rounded min-w-48 bg-stone-100">
                <p
                  onClick={() => navigate("my-profile")}
                  className="cursor-pointer hover:text-black"
                >
                  My profile
                </p>
                <p
                  onClick={() => navigate("my-appointments")}
                  className="cursor-pointer hover:text-black"
                >
                  My Appointments
                </p>
                <p onClick={logout} className="cursor-pointer hover:text-black">
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="px-8 py-3 font-light text-white rounded-full bg-primary md:block"
          >
            Create account
          </button>
        )}
        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden"
          src={assets.menu_icon}
          alt=""
        />
        {/* -------------------------mobile menu-------------- */}
        <div
          className={` ${showMenu ? "fixed w-full" : "hidden"} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
        >
          <div className="flex items-center justify-between px-5 py-5">
            <img className="w-36" src={assets.logo} alt="" />
            <img
              className="w-7"
              onClick={() => setShowMenu(false)}
              src={assets.cross_icon}
              alt=""
            />
          </div>
          <ul className="flex flex-col items-center gap-2 px-5 mt-5 text-lg font-medium">
            <NavLink onClick={() => setShowMenu(false)} to="/">
              <p className="inline-block px-4 py-2 rounded">Home</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/doctors">
              <p className="inline-block px-4 py-2 rounded">ALL DOCTORS</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/about">
              <p className="inline-block px-4 py-2 rounded">ABOUT</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/contact">
              <p className="inline-block px-4 py-2 rounded">CONTACT</p>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
