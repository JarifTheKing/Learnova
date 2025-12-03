import React, { useState } from "react";
import toast from "react-hot-toast";
import Container from "../Shared/Container";

const Support = () => {
  const [form, setForm] = useState({
    issue: "",
    email: "",
    details: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Support request submitted!");
    setForm({ issue: "", email: "", details: "" });
  };

  return (
    <Container>
      <div className="my-4">
        <div className="min-h-screen bg-[url('/Huh.jpg')] bg-black/50 bg-blend-overlay bg-cover bg-center bg-no-repeat rounded-3xl flex items-center justify-center px-4 sm:px-6 md:px-8">
          <div className="relative w-full max-w-sm sm:max-w-md p-[3px] rounded-2xl animate-border border border-emerald-500 hover:shadow-[0_0_45px_rgba(16,185,129,0.8)] transition-all duration-500">
            <div className="backdrop-blur-sm bg-black/10 rounded-2xl p-6 sm:p-8 text-white">
              {/* Title */}
              <div className="text-center mb-6">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-500  tracking-wide">
                  Support Center
                </h1>
                <p className="mt-1 text-sm sm:text-base opacity-90">
                  We're here to help you anytime
                </p>
              </div>

              {/* Quick Help Section */}
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-emerald-400">
                  Quick Help
                </h2>
                <ul className="list-disc ml-5 mt-2 text-sm space-y-1 text-gray-200">
                  <li>Can't log in? Try resetting your password.</li>
                  <li>Profile not updating? Refresh your browser.</li>
                  <li>Account issues? Contact support below.</li>
                </ul>
              </div>

              {/* Support Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Issue Type */}
                <div>
                  <label className="label text-white text-sm sm:text-base">
                    Issue Type
                  </label>
                  <select
                    name="issue"
                    value={form.issue}
                    onChange={handleChange}
                    className="select select-bordered w-full bg-white/80 text-black"
                    required
                  >
                    <option value="">Select an issue</option>
                    <option>Login Problem</option>
                    <option>Account Issue</option>
                    <option>Technical Error</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* Email */}
                <div>
                  <label className="label text-white text-sm sm:text-base">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="input input-bordered w-full bg-white/80 text-black placeholder-gray-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {/* Details */}
                <div>
                  <label className="label text-white text-sm sm:text-base">
                    Describe Your Issue
                  </label>
                  <textarea
                    name="details"
                    rows="4"
                    value={form.details}
                    onChange={handleChange}
                    className="textarea textarea-bordered w-full bg-white/80 text-black placeholder-gray-500"
                    placeholder="Write details here..."
                    required
                  ></textarea>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn btn-primary w-full bg-emerald-500 hover:bg-emerald-600 border-none text-white text-lg"
                >
                  Submit Request
                </button>
              </form>

              {/* Bottom Message */}
              <p className="text-center text-xs sm:text-sm mt-5 text-gray-300">
                Our support team will respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Support;
