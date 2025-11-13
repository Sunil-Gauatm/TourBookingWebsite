import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/User/Homepage/Homepage";
import Adminloginpage from "./Pages/Admin/Adminloginpage";
import ThemeProvider from "./theme/ThemeProvider";
import "./theme/theme-variables.css";

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/admin/login" element={<Adminloginpage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
