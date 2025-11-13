import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/User/Homepage/Homepage";
import Adminloginpage from "./Pages/Admin/Adminloginpage";
import ThemeProvider from "./theme/ThemeProvider";
import "./theme/theme-variables.css";
import AdminDashboardPage from "./Pages/Admin/dashboard/AdminDashboardPage";
import AdminDashBoard from "./Pages/Admin/dashboard/Components/AdminDashBoard";
import AdminDestination from "./Pages/Admin/dashboard/Components/AdminDestination";

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />

          {/* admin routes */}
          <Route path="/admin/login" element={<Adminloginpage />} />
          <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
          <Route path="/admin/" element={<AdminDashBoard />} />
          <Route path="/admin/destination" element={<AdminDestination />} />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
