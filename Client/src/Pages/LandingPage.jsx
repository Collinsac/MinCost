import React from "react";
import Sidebar from "../Components/Sidebar";
import { Outlet } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="gap-x-4 flex p-6 relative h-screen bg-slate-300 z-0">
      <div className="-z-10 absolute bg-gradient-to-r  to-[#0048aa] from-[#1586e2] top-0 left-0 right-0 h-[250px]"></div>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default LandingPage;
