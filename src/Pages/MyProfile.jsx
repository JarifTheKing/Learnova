import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen my-6 flex items-center justify-center bg-[url('/birdE.jpg')] bg-black/50 bg-blend-overlay bg-cover bg-center bg-no-repeat rounded-lg px-4 sm:px-6 md:px-8">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-8 text-center border border-emerald-400">
        <h2 className="text-3xl font-bold text-emerald-400 mb-6 ">
          My Profile
        </h2>

        <div className="flex justify-center mb-6">
          <img
            src={
              user?.photoURL ||
              "https://img.icons8.com/3d-fluency/94/guest-male--v3.png"
            }
            alt="User"
            className="w-28 h-28 rounded-full border-4 border-emerald-500 object-cover shadow-lg"
          />
        </div>

        <div className="space-y-4 text-white">
          <p className="text-lg">
            <span className="font-semibold text-emerald-300">Name:</span>{" "}
            {user?.displayName}
          </p>
          <p className="text-lg">
            <span className="font-semibold text-emerald-300">Email:</span>{" "}
            {user?.email}
          </p>
        </div>

        {/* Update Button */}
        <div className="mt-8">
          <Link to="/updateProfile">
            <button className="btn bg-emerald-500 hover:bg-emerald-600 border-none text-white w-full">
              Update Profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
