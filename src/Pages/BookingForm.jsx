import React, { useState } from "react";
import toast from "react-hot-toast";
// import { toast } from "react-toastify";

const BookingSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("🔥 Boom! You just booked your session like a champ. 📘", {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });

    setFormData({ name: "", email: "" });
  };

  return (
    <div>
      <div className="min-h-screen mt-8 rounded-xl flex items-center justify-center bg-[url('/newGlass.jpg')] bg-black/60 bg-blend-overlay bg-cover bg-center bg-no-repeat px-4 sm:px-6 md:px-8">
        <div className="relative w-full max-w-md p-[3px] rounded-2xl border border-emerald-400 hover:shadow-[0_0_40px_rgba(16,185,129,0.7)] transition-all duration-500">
          <div className=" bg-white/10 rounded-2xl p-8 flex flex-col justify-center text-white shadow-lg">
            <h2 className="text-2xl text-center mb-8 font-semibold">
              <span className="fontStyle text-3xl font-bold text-emerald-600">
                Learnova
              </span>{" "}
              <br />
              Book Session Form
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-gray-200 mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Enter your name"
                  className="w-full border border-gray-400 rounded-md p-3 bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-200 mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="Enter your email"
                  className="w-full border border-gray-400 rounded-md p-3 bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  required
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-md font-medium transition-all"
              >
                Book Session
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSection;
