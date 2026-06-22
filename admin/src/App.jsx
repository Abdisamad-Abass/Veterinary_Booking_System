import { useContext, useEffect, useState } from "react";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import { AdminContext } from "./context/AdminContext";
import { DoctorContext } from "./context/DoctorContext";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Admin/Dashboard";
import Allappointment from "./pages/Admin/AllAppointment";
import Adddoctor from "./pages/Admin/Adddoctor";
import DoctorsList from "./pages/Admin/DoctorsList";
import DoctorDashboard from "./pages/Doctor/DoctorDashboard";
import DoctorAppointment from "./pages/Doctor/DoctorAppointment";
import DoctorProfile from "./pages/Doctor/DoctorProfile";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const { dToken, setDToken } = useContext(DoctorContext);
  const { atoken, setAToken } = useContext(AdminContext);
  const [loading, setLoading] = useState(true);

  // force auth validation on app load
  useEffect(() => {
    const admin = localStorage.getItem("aToken");
    const doctor = localStorage.getItem("dToken");

    if (!admin) setAToken("");
    if (!doctor) setDToken("");

    setLoading(false);
  }, []);

  // while checking storage
  if (loading) return null;

  const isAuthenticated = atoken || dToken;

  return (
    <>
      <ToastContainer />

      {/*  LOGIN GATE  */}
      {!isAuthenticated ? (
        <Login />
      ) : (
        <>
          <Navbar />
          <div className="flex items-start">
            <Sidebar />

            <Routes>
              {/* ADMIN */}
              <Route
                path="/admin-dashboard"
                element={
                  <ProtectedRoute token={atoken}>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/add-doctor"
                element={
                  <ProtectedRoute token={atoken}>
                    <Adddoctor />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/all-appointment"
                element={
                  <ProtectedRoute token={atoken}>
                    <Allappointment />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/doctor-list"
                element={
                  <ProtectedRoute token={atoken}>
                    <DoctorsList />
                  </ProtectedRoute>
                }
              />

              {/* DOCTOR */}
              <Route
                path="/doctor-dashboard"
                element={
                  <ProtectedRoute token={dToken}>
                    <DoctorDashboard />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/doctor-appointments"
                element={
                  <ProtectedRoute token={dToken}>
                    <DoctorAppointment />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/doctor-profile"
                element={
                  <ProtectedRoute token={dToken}>
                    <DoctorProfile />
                  </ProtectedRoute>
                }
              />

              <Route path="/" element={<></>} />
            </Routes>
          </div>
        </>
      )}
    </>
  );
};

export default App;
