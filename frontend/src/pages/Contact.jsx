import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="pt-10 text-2xl text-center text-gray-500">
        <p>
          CONTACT <span className="font-semibold text-gray-700">US</span>
        </p>
      </div>
      <div className="flex flex-col justify-center gap-10 my-10 text-sm md:flex-row mb-28">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.contact_image1}
          alt=""
        />
        <div className="flex flex-col items-start justify-center gap-6">
          <p className="text-lg font-semibold text-gray-600">OUR OFFICE</p>
          <p className="text-gray-500">
            00000 Williams Station <br /> Suite 000, Garissa, Kenya
          </p>
          <p className="text-gray-500">
            Tel: +254 746 340 754 <br />
            Email:{" "}
            <a
              href="mailto:vetdoctors@gmail.com"
              className="text-gray-600 hover:underline hover:text-blue-600"
            >
              vetdoctors@gmail.com
            </a>
          </p>
          <p className="text-lg font-semibold text-slate-600">
            CAREERS AT vetdoctors
          </p>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button className="px-8 py-4 text-sm transition-all duration-500 border border-black hover:bg-black hover:text-white">
            Explore jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
