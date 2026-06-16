import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const TopDoctor = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
      <p className="text-sm text-center sm:w-1/3">
        Simply browse through our extensive list of trusted Doctors.
      </p>
      <div className="grid w-full gap-4 pt-5 grid-cols-auto gap-y-6 sm:px-0">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            onClick={() => {
              navigate(`/appointment/${item._id}`);
              scrollTo(0, 0);
            }}
            key={index}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
          >
            <img className="bg-blue-50" src={item.image} alt="" />
            <div className="p-4">
              <div
                className={`flex items-center gap-2 text-sm text-center ${item.available ? "text-green-500" : "text-gray-500"} `}
              >
                <p
                  className={`w-2 h-2 ${item.available ? "bg-green-500" : "bg-gray-500"}  rounded-full`}
                ></p>
                <p>{item.available ? "Available" : "Not available"}</p>
              </div>
              <p className="text-lg font-medium text-gray-900">{item.name}</p>
              <p className="text-sm text-gray-600">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          navigate("/doctors");
          scrollTo(0, 0);
        }}
        className="px-8 py-2 mt-10 text-white bg-blue-500 rounded-full hover:bg-white hover:border hover:border-gray-400 hover:text-black"
      >
        more
      </button>
    </div>
  );
};

export default TopDoctor;
