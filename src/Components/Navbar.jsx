import React, { useContext } from "react";
import { FaGraduationCap, FaUserTie } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { MdLogin } from "react-icons/md";
import toast from "react-hot-toast";
import Container from "../Shared/Container";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("You have logged out successfully 👋");
      })
      .catch((error) => {
        toast.error("Logout failed: " + error.message);
      });
  };
  return (
    <div className="sticky top-0 z-50">
      <Container>
        <div>
          <div className="navbar  bg-emerald-100 shadow-md rounded-3xl mt-2">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />{" "}
                  </svg>
                </div>
                <ul
                  tabIndex="-1"
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <NavLink to="/">
                    <li className="font-bold text-emerald-500">Home</li>
                  </NavLink>
                  <NavLink to="/all-courses">
                    <li className="font-bold text-emerald-500">All Courses</li>
                  </NavLink>

                  {user && (
                    <NavLink to="/myProfile">
                      <li className="font-bold text-emerald-500">My Profile</li>
                    </NavLink>
                  )}

                  <NavLink to="/about">
                    <li className="font-bold text-emerald-500">About Us</li>
                  </NavLink>
                  <NavLink to="/contact">
                    <li className="font-bold text-emerald-500">Contact Us</li>
                  </NavLink>
                  <NavLink to="/support">
                    <li className="font-bold text-emerald-500">Support</li>
                  </NavLink>
                </ul>
              </div>
              <Link
                to="/"
                className="btn btn-ghost text-xl lg:text-4xl font-bold text-emerald-500 fontStyle "
              >
                <FaGraduationCap className="lg:text-4xl text-xl" /> LEARNOVA
              </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 flex gap-x-6">
                <NavLink to="/">
                  <li className="font-bold text-emerald-500 hover:bg-gray-400 hover:text-white   p-1 rounded-md  cursor-pointer">
                    Home
                  </li>
                </NavLink>
                <NavLink to="/all-courses">
                  <li className="font-bold text-emerald-500 hover:bg-gray-400 hover:text-white   p-1 rounded-md  cursor-pointer">
                    All Courses
                  </li>
                </NavLink>

                {/* <NavLink to="/myProfile">
                <li className="font-bold text-emerald-500 hover:bg-gray-400 hover:text-white  p-1 rounded-md cursor-pointer">
                  My Profile
                </li>
              </NavLink> */}

                {user && (
                  <NavLink to="/myProfile">
                    <li className="font-bold text-emerald-500 hover:bg-gray-400 hover:text-white p-1 rounded-md cursor-pointer">
                      My Profile
                    </li>
                  </NavLink>
                )}

                <NavLink to="/about">
                  <li className="font-bold text-emerald-500 hover:bg-gray-400 hover:text-white  p-1 rounded-md cursor-pointer">
                    About Us
                  </li>
                </NavLink>
                <NavLink to="/contact">
                  <li className="font-bold text-emerald-500 hover:bg-gray-400 hover:text-white  p-1 rounded-md cursor-pointer">
                    Contact Us
                  </li>
                </NavLink>
                <NavLink to="/support">
                  <li className="font-bold text-emerald-500 hover:bg-gray-400 hover:text-white  p-1 rounded-md cursor-pointer">
                    Support
                  </li>
                </NavLink>
              </ul>
            </div>

            {/* <div className="navbar-end flex items-center gap-4 mr-1">
              <div className="group relative flex flex-col items-center">
                
                <h2 className="absolute left-[-120px] top-[10px] text-sm bg-emerald-500 text-white p-2 rounded-md font-bold  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {user?.displayName || "Guest"}
                </h2>
              </div>

              <button
                onClick={handleLogOut}
                className="btn bg-lime-600 hover:bg-cyan-900 text-white"
              >
                Log Out
              </button>
            </div> */}

            {/* User */}
            <div className="navbar-end flex items-center gap-3">
              {user ? (
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar w-12 h-12 sm:w-14 sm:h-14"
                  >
                    <div className="rounded-full border-2 border-blue-700 overflow-hidden">
                      <img
                        className="rounded-full h-full w-full object-cover cursor-pointer"
                        src={
                          user?.displayName
                            ? user.photoURL
                            : "https://img.icons8.com/3d-fluent/100/user-2.png"
                        }
                        alt="User"
                      />
                      <button
                        onClick={handleLogOut}
                        className="btn bg-lime-600 hover:bg-cyan-900 text-white"
                      >
                        Log Out
                      </button>
                    </div>
                  </label>

                  <ul
                    tabIndex={0}
                    className="menu dropdown-content bg-emerald-100 text-white rounded-box w-48 mt-3 shadow-lg animate-dropdown origin-top-right"
                  >
                    <li>
                      <button
                        onClick={handleLogOut}
                        className="btn bg-lime-600 hover:bg-cyan-900 text-white"
                      >
                        Log Out
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="flex items-center">
                  {/* visible md and lg devices */}
                  <div className="hidden md:flex gap-2 mr-2">
                    <Link
                      to="/auth/login"
                      className="btn bg-emerald-600 hover:bg-cyan-700 text-white"
                    >
                      Log In
                    </Link>

                    <Link
                      to="/auth/Register"
                      className="btn bg-emerald-600 hover:bg-cyan-700 text-white"
                    >
                      Register
                    </Link>
                  </div>

                  {/* visible only Mobile device */}
                  <div className="dropdown dropdown-end md:hidden lg:hidden">
                    <label
                      tabIndex={0}
                      className="btn btn-warning btn-circle avatar w-12 h-12 sm:w-14 sm:h-14"
                    >
                      <div className="rounded-full border-2 border-blue-700 overflow-hidden">
                        <img
                          className="rounded-full h-full w-full object-cover cursor-pointer"
                          src="/log-lock.jpeg"
                          alt="User"
                        />
                      </div>
                    </label>

                    <ul
                      tabIndex={0}
                      className="menu dropdown-content bg-emerald-100 text-white rounded-box w-35 mt-3 shadow-lg animate-dropdown origin-top-right"
                    >
                      <li>
                        <Link
                          to="/auth/login"
                          className="btn bg-emerald-600 hover:bg-cyan-700 text-white"
                        >
                          Log In
                        </Link>{" "}
                      </li>

                      <li>
                        <Link
                          to="/auth/Register"
                          className="btn bg-emerald-600 hover:bg-cyan-700 text-white"
                        >
                          Register
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
