import React, { useContext } from "react";
import { AdminContext } from "../../context/AdminContext";
import { useEffect } from "react";

const DoctorsList = () => {
  const { doctors, atoken, getAllDoctors, changeAvailability } =
    useContext(AdminContext);

  useEffect(() => {
    if (atoken) {
      getAllDoctors();
    }
  }, [atoken]);
  return (
    <div className="m-5 max-h-[90vh] overflow-y-scroll ">
      <h1 className="text-lg font-medium">All Doctors</h1>
      <div className="flex flex-wrap w-full gap-4 pt-5 gap-y-6">
        {doctors.map((item, index) => (
          <div
            className="overflow-hidden border border-indigo-200 rounded cursor-pointer xl max-w-56 group"
            key={index}
          >
            <img
              className="transition-all duration-500 bg-indigo-50 group-hover:bg-primary"
              src={item.image}
              alt=""
            />
            <div className="px-4 pt-4">
              <p className="text-lg font-medium text-neutral-800">
                {item.name}
              </p>
              <p className="text-sm text-zinc-600">{item.speciality}</p>
              <div className="flex items-center gap-1 mt-2 text-sm">
                <input
                  onChange={() => changeAvailability(item._id)}
                  type="checkbox"
                  checked={item.available}
                />
                <p>Available</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsList;
