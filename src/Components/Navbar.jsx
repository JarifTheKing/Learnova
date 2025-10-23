import React, { useContext } from "react";
import { FaGraduationCap, FaUserTie } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { MdLogin } from "react-icons/md";
import toast from "react-hot-toast";

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
    <div>
      <div className="navbar bg-emerald-100 shadow-md">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              <NavLink to="/myProfile">
                <li className="font-bold text-emerald-500">My Profile</li>
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
            <NavLink to="/myProfile">
              <li className="font-bold text-emerald-500 hover:bg-gray-400 hover:text-white  p-1 rounded-md cursor-pointer">
                My Profile
              </li>
            </NavLink>
          </ul>
        </div>

        {/* User */}
        {user ? (
          <div className="navbar-end flex items-center gap-4 mr-1">
            <div className="group relative flex flex-col items-center">
              <Link to="/myProfile">
                <img
                  className="rounded-full border border-emerald-600 cursor-pointer transition-transform duration-300 group-hover:scale-110"
                  width="50"
                  height="50"
                  src={
                    user?.photoURL ||
                    "https://img.icons8.com/3d-fluency/94/guest-male--v3.png"
                  }
                  alt="user"
                />
              </Link>
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
          </div>
        ) : (
          <div className="navbar-end flex items-center gap-1 lg:gap-4 mr-1">
            <img
              width="40"
              height="40"
              src="https://img.icons8.com/dotty/80/test-account.png"
              alt="test-account"
            />
            <Link
              to="/auth/login"
              className="btn bg-emerald-600 hover:bg-cyan-700 text-white"
            >
              Log In
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
