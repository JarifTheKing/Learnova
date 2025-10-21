import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const Root = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>

      <div>
        <Outlet></Outlet>
      </div>

      <div className="min-h-screen ">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
