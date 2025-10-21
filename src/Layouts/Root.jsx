import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const Root = () => {
  return (
    <div>
      <Navbar />

      <div className="min-h-screen w-11/12 mx-auto">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Root;
