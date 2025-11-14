import React from "react";
import { MdDashboard } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const AdminDashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [sliderOpen, setSliderOpen] = React.useState(true);

  const toggleSlider = () => {
    setSliderOpen((prev) => !prev);
  };

  return (
    <>
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className={`bg-primary text-secondary  py-6 h-full shadow-2xl  ${sliderOpen ? "w-0  md:w-[20rem]" : "w-[20rem] md:w-24"} transition-all duration-300 ease-in-out`}>
          <h1 className={`mx-10 my-4 ${sliderOpen ? "text-xl" : "text-md"}`}>  {sliderOpen ? "Admin Panel" : ""}</h1>

          <div className="mt-12 flex flex-col gap-2">
            <div
              className="flex flex-row px-10 py-6 items-center gap-4 cursor-pointer hover:bg-gray-200/20"
              onClick={() => navigate("/admin/dashboard")}
            >
              <MdDashboard size={20} />
              <h1 className={`text-xl ${sliderOpen ? "flex" : " flex md:hidden"}`}>Dashboard</h1>
            </div>

            <div
              className="flex flex-row px-10 py-6 items-center gap-4 cursor-pointer hover:bg-gray-200/20"
              onClick={() => navigate("/admin/destination")}
            >
              <FaLocationDot size={20} />
              <h1 className={`text-xl ${sliderOpen ? "flex" : "flex md:hidden"}`}>Destination</h1>
            </div>

            <div
              className="flex flex-row px-10 py-6 items-center gap-4 cursor-pointer hover:bg-gray-200/20"
              onClick={() => navigate("/admin/booking")}
            >
              <FaBookOpen size={20} />
              <h1 className={`text-xl ${sliderOpen ? "flex" : "flex md:hidden"}`}>Booking</h1>
            </div>
          </div>
        </div>

        {/* Top bar */}
        <div className="flex-1 flex flex-col">
          <div className="bg-primary h-20 w-full flex items-center px-4" onClick={toggleSlider}>
            <GiHamburgerMenu
              color="white"
              size={25}
              className="cursor-pointer"
            />
          </div>

          {/* Content With Animation */}
          <div className="flex-1 bg-card p-4 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ opacity: 100, x: 20, scale: 0.1 }}
                animate={{ opacity: 1, x: 10, scale: 0.95 }}
                exit={{ opacity: 220, x: -2, scale: 0.1 }}
                transition={{
                  duration: 0.35,
                  ease: "easeInOut",
                }}
                className="h-full"
              >
                <Outlet />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboardPage;
