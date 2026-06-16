import React, { useContext, useState } from "react";
import { AdminContext } from "../context/AdminContext";
import { DoctorContext } from "../context/DoctorContext";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { FiMenu, FiX } from "react-icons/fi";

const Sidebar = () => {
  const { atoken } = useContext(AdminContext);
  const { dToken } = useContext(DoctorContext);

  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
     hover:bg-[#F2F3FF] hover:translate-x-1
     ${
       isActive
         ? "bg-[#F2F3FF] border-r-4 border-primary font-medium"
         : "text-[#515151]"
     }`;

  const SidebarContent = () => (
    <div className="flex flex-col h-full gap-2 p-4">
      {atoken && (
        <ul className="flex flex-col gap-2">
          <NavLink to="/admin-dashboard" className={linkClass}>
            <img src={assets.home_icon} className="w-5 h-5" />
            <span>Dashboard</span>
          </NavLink>

          <NavLink to="/all-appointment" className={linkClass}>
            <img src={assets.appointment_icon} className="w-5 h-5" />
            <span>Appointments</span>
          </NavLink>

          <NavLink to="/add-doctor" className={linkClass}>
            <img src={assets.add_icon} className="w-5 h-5" />
            <span>Add Doctor</span>
          </NavLink>

          <NavLink to="/doctor-list" className={linkClass}>
            <img src={assets.people_icon} className="w-5 h-5" />
            <span>Doctors List</span>
          </NavLink>
        </ul>
      )}

      {dToken && (
        <ul className="flex flex-col gap-2">
          <NavLink to="/doctor-dashboard" className={linkClass}>
            <img src={assets.home_icon} className="w-5 h-5" />
            <span>Dashboard</span>
          </NavLink>

          <NavLink to="/doctor-appointments" className={linkClass}>
            <img src={assets.appointment_icon} className="w-5 h-5" />
            <span>Appointments</span>
          </NavLink>

          <NavLink to="/doctor-profile" className={linkClass}>
            <img src={assets.people_icon} className="w-5 h-5" />
            <span>Profile</span>
          </NavLink>
        </ul>
      )}
    </div>
  );

  return (
    <>
      {/* Top Mobile Bar */}
      <div className="sticky top-0 z-50 border-b md:hidden">
        <button
          onClick={() => setOpen(true)}
          className="p-2 rounded-md hover:bg-gray-100"
        >
          <FiMenu size={22} />
        </button>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden min-h-screen bg-white border-r shadow-sm md:block w-72">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar Drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          open ? "visible" : "invisible"
        }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black transition-opacity ${
            open ? "opacity-40" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute left-0 top-0 h-full w-72 bg-white shadow-lg transform transition-transform duration-300 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Close Button */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="font-semibold">Navigation</h2>
            <button
              onClick={() => setOpen(false)}
              className="p-2 rounded-md hover:bg-gray-100"
            >
              <FiX size={20} />
            </button>
          </div>

          <SidebarContent />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
