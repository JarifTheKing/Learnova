import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Components/Footer";

const Root = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Navbar />

      <div className="min-h-screen w-11/12 mx-auto ">
        {navigation.state === "loading" ? <Spinner /> : <Outlet />}
      </div>

      <Footer />
    </div>
  );
};

export default Root;
