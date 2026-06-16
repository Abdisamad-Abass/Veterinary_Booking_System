import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* ------------------left Section----------------- */}
        <div>
          <img className="w-40 mb-5" src={assets.logo} alt="" />
          <p className="w-full leading-6 text-gray-600 md:w-2/3">
            At vetdoctors, we are dedicated to providing compassionate and
            expert care for your furry friends. From routine check-ups to
            specialized treatments, we are here to ensure your pets live happy,
            healthy lives.
          </p>
        </div>
        {/* ------------------center Section----------------- */}
        <div>
          <p className="mb-5 text-xl font-medium">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-semibold"
                    : "hover:text-primary transition-colors"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-semibold"
                    : "hover:text-primary transition-colors"
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-semibold"
                    : "hover:text-primary transition-colors"
                }
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/privacy-policy"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-semibold"
                    : "hover:text-primary transition-colors"
                }
              >
                Privacy Policy
              </NavLink>
            </li>
          </ul>
        </div>
        {/* ------------------Rght Section----------------- */}
        <div>
          <p className="mb-5 text-xl font-medium">GET IN TOUCH</p>
          <div className="flex flex-row items-center gap-4">
            <img
              onClick={() => navigate("/chatbot")}
              src={assets.chatbot_icon1}
              className="w-20 h-20 cursor-pointer"
              alt=""
            />
            <p className="font-medium text-gray-600">ChatAi Assistance</p>
          </div>

          <ul className="flex flex-col gap-2 text-gray-600">
            <li>
              <a
                href="tel:+254741909011"
                className="text-gray-600 hover:underline hover:text-blue-600"
              >
                +254-746-340-754
              </a>
            </li>
            <a
              href="mailto:vetdoctors@gmail.com"
              className="text-gray-600 hover:underline hover:text-blue-600"
            >
              vetdoctors@gmail.com
            </a>
          </ul>
        </div>
      </div>
      {/* -----------------------copyright text---------------- */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright © 2025 vetdoctors.com. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
