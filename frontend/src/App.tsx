import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/User/Homepage/Homepage";
import Adminloginpage from "./Pages/Admin/Adminloginpage";
import ThemeProvider from "./theme/ThemeProvider";
import "./theme/theme-variables.css";
import AdminDashboardPage from "./Pages/Admin/dashboard/AdminDashboardPage";
import AdminDashBoard from "./Pages/Admin/dashboard/Components/AdminDashBoard";
import AdminDestination from "./Pages/Admin/dashboard/Components/Destination/AdminDestination";
import AdminBooking from "./Pages/Admin/dashboard/Components/AdminBooking";

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />

          {/* admin routes */}
          <Route path="/admin/login" element={<Adminloginpage />} />

          <Route path="/admin" element={<AdminDashboardPage />}>
            <Route index element={<AdminDashBoard />} />
            <Route path="dashboard" element={<AdminDashBoard />} />
            <Route path="destination" element={<AdminDestination />} />
            <Route path="booking" element={<AdminBooking />} />
          </Route>
          
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
