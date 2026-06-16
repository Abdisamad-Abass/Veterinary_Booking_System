// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { AdminContext } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";
import { DoctorContext } from "../context/DoctorContext";
const Navbar = () => {
  const { atoken, setAToken } = useContext(AdminContext);
  const { dToken, setDToken } = useContext(DoctorContext);

  const navigate = useNavigate();
  const logout = () => {
    navigate("/");
    atoken && setAToken("");
    atoken && localStorage.removeItem("atoken");
    dToken && setDToken("");
    dToken && localStorage.removeItem("dToken");
  };
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white border-b sm:px-10">
      <div className="flex items-center gap-2 text-xs">
        <img
          className="cursor-pointer w-36 sm:w-40"
          src={assets.admin_logo}
          alt=""
        />
        <p className="border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600">
          {atoken ? "Admin" : "Doctor"}
        </p>
      </div>
      <button
        onClick={logout}
        className="px-10 py-2 text-sm text-white rounded-full bg-primary"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
