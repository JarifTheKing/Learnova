import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Components/Footer";
import { ToastContainer } from "react-toastify";

const Root = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Navbar />

      <div className="min-h-screen w-11/12 mx-auto ">
        <ToastContainer
          position="top-center"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
          draggable
          theme="colored"
        />
        {navigation.state === "loading" ? <Spinner /> : <Outlet />}
      </div>

      <Footer />
    </div>
  );
};

export default Root;
