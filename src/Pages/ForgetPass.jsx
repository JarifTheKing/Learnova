import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router";
import toast from "react-hot-toast";
// import { toast } from "react-toastify";

const ForgetPass = () => {
  const { sendPassResetEmailFunc, setLoading } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location]);

  const handleReset = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    sendPassResetEmailFunc(email)
      .then(() => {
        setLoading(false);
        toast.success("Password reset link sent! Check your email 📧");
        window.open("https://mail.google.com", "_blank");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="min-h-screen my-6 flex items-center justify-center bg-[url('/green-circle.jpg')] bg-black/50 bg-blend-overlay bg-cover bg-center bg-no-repeat rounded-lg px-4 sm:px-6 md:px-8">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-8 text-center border border-emerald-400">
        <h2 className="text-3xl font-bold text-emerald-400 mb-6 fontStyle">
          Reset Password
        </h2>
        <form onSubmit={handleReset} className="space-y-4 text-left">
          <div>
            <label className="label text-white text-sm sm:text-base">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full bg-white/80 text-black placeholder-gray-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <button
            type="submit"
            className="btn bg-emerald-500 hover:bg-emerald-600 border-none text-white w-full"
          >
            Reset Password
          </button>
        </form>

        <button
          onClick={() => navigate(-1)}
          className="text-emerald-300 hover:underline mt-6 block mx-auto"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default ForgetPass;
