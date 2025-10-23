import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
// import { toast } from "react-toastify";

const UpdateProfile = () => {
  const { user, updateProfileFunc, setUser } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();

    updateProfileFunc(displayName, photoURL)
      .then(() => {
        setUser({ ...user, displayName, photoURL });
        toast.success("Profile updated successfully 🎉");
        navigate("/myProfile");
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      });
  };

  return (
    <div className="min-h-screen my-6 flex items-center justify-center bg-[url('/flash.jpg')] bg-black/50 bg-blend-overlay bg-cover bg-center bg-no-repeat rounded-lg px-4 sm:px-6 md:px-8">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-8 text-center border border-emerald-400">
        <h2 className="text-3xl font-bold text-emerald-400 mb-6 fontStyle">
          Update Profile
        </h2>

        <form onSubmit={handleUpdate} className="space-y-5 text-left">
          {/* Name */}
          <div>
            <label className="label text-white text-sm sm:text-base">
              Name
            </label>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="input input-bordered w-full bg-white/80 text-black placeholder-gray-500"
              placeholder="Enter new name"
            />
          </div>

          {/* Photo */}
          <div>
            <label className="label text-white text-sm sm:text-base">
              Photo URL
            </label>
            <input
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="input input-bordered w-full bg-white/80 text-black placeholder-gray-500"
              placeholder="Paste new photo URL"
            />
          </div>

          <button
            type="submit"
            className="btn w-full bg-emerald-500 hover:bg-emerald-600 border-none text-white"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
