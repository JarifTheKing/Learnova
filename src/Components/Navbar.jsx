import React from "react";
import { FaGraduationCap, FaUserTie } from "react-icons/fa";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
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
              <NavLink>
                <li className="font-bold text-emerald-500">
                  <a>Logo</a>
                </li>
              </NavLink>
              <NavLink>
                <li className="font-bold text-emerald-500">
                  <a>Logo</a>
                </li>
              </NavLink>
              <NavLink>
                <li className="font-bold text-emerald-500">
                  <a>Logo</a>
                </li>
              </NavLink>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font-bold text-emerald-500">
            <FaGraduationCap className="text-3xl" /> LEARNOVA
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavLink>
              <li className="font-bold text-emerald-500">
                <a>Logo</a>
              </li>
            </NavLink>
            <NavLink>
              <li className="font-bold text-emerald-500">
                <a>Home</a>
              </li>
            </NavLink>
            <NavLink>
              <li className="font-bold text-emerald-500">
                <a>My Profile</a>
              </li>
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end flex items-center gap-4">
          <img
            className="rounded-full border border-emerald-600"
            width="50"
            height="50"
            src="https://img.icons8.com/3d-fluency/94/guest-male--v3.png"
            alt="guest-male--v3"
          />
          <a className="btn bg-emerald-600 hover:bg-cyan-700 text-white">
            Log In
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
