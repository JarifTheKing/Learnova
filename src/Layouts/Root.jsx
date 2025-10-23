import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Components/Footer";
// import { ToastContainer } from "react-toastify";
import MyLoader from "../Pages/MyLoader"; // ✅ import your loader
import { Toaster } from "react-hot-toast";

const Root = () => {
  const navigation = useNavigation();

  return (
    <div>
      <Navbar />
      <div className="min-h-screen w-11/12 mx-auto ">
        {/* <ToastContainer
          position="top-center"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
          draggable
          theme="colored"
        /> */}
        <Toaster position="top-center" reverseOrder={false} />
        {navigation.state === "loading" ? <MyLoader /> : <Outlet />}
      </div>
      <Footer />
    </div>
  );
};

export default Root;
