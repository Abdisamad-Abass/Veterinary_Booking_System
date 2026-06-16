import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
const Doctors = () => {
  const { speciality } = useParams();

  const { doctors } = useContext(AppContext);
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setshowFilter] = useState(false);
  const navigate = useNavigate();

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };
  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  const filterStyle = (active) =>
    `w-full sm:w-auto px-4 py-2 border rounded-lg cursor-pointer
   transition-all duration-200
   hover:bg-indigo-50 hover:border-indigo-300 hover:shadow-sm
   hover:scale-[1.02]
   ${
     active
       ? "bg-indigo-100 border-indigo-400 text-black font-medium"
       : "text-gray-600"
   }`;
  return (
    <div>
      <p className="text-gray-600">Browse through the doctors specialist.</p>
      <div className="flex flex-col items-start gap-5 mt-5 sm:flex-row">
        <button
          className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? "bg-primary text-white" : ""}`}
          onClick={() => setshowFilter((prev) => !prev)}
        >
          Filters
        </button>
        <div
          className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? "flex" : "hidden sm:flex"}`}
        >
          <p
            onClick={() =>
              speciality === "Livestock Vet"
                ? navigate("/doctors")
                : navigate("/doctors/Livestock Vet")
            }
            className={filterStyle(speciality === "Livestock Vet")}
          >
            Livestock Vet
          </p>
          <p
            onClick={() =>
              speciality === "Theriogenologist"
                ? navigate("/doctors")
                : navigate("/doctors/Theriogenologist")
            }
            className={filterStyle(speciality === "Theriogenologist")}
          >
            Theriogenologist
          </p>
          <p
            onClick={() =>
              speciality === "Vet Dermatologist"
                ? navigate("/doctors")
                : navigate("/doctors/Vet Dermatologist")
            }
            className={filterStyle(speciality === "Vet Dermatologist")}
          >
            Vet Dermatologist
          </p>
          <p
            onClick={() =>
              speciality === "Vet Neonatologist"
                ? navigate("/doctors")
                : navigate("/doctors/Vet Neonatologist")
            }
            className={filterStyle(speciality === "Vet Neonatologist")}
          >
            Vet Neonatologist
          </p>
          <p
            onClick={() =>
              speciality === "Vet Neurologist"
                ? navigate("/doctors")
                : navigate("/doctors/Vet Neurologist")
            }
            className={filterStyle(speciality === "Vet Neurologist")}
          >
            Vet Neurologist
          </p>
          <p
            onClick={() =>
              speciality === "Vet Gastroenterologist"
                ? navigate("/doctors")
                : navigate("/doctors/Vet Gastroenterologist")
            }
            className={filterStyle(speciality === "Vet Gastroenterologist")}
          >
            Vet Gastroenterologist
          </p>
        </div>
        <div className="grid w-full gap-4 grid-cols-auto gap-y-6">
          {filterDoc.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
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
      </div>
    </div>
  );
};

export default Doctors;
