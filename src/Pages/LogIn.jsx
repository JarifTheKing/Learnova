import React, { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const LogIn = () => {
  const { createUser } = useContext(AuthContext);

  const handleLoginWithEmail = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("Clicked", { email, password });

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
      })
      .catch((error) => {
        alert(error.code);
      });
  };

  return (
    <div className="my-4 ">
      <div className="min-h-screen bg-[url('/Brail.jpg')] bg-black/50 bg-blend-overlay bg-cover bg-center bg-no-repeat rounded-lg flex items-center justify-center px-4 sm:px-6 md:px-8">
        {/* Animated Gradient Border */}
        <div className="relative w-full  max-w-sm sm:max-w-md p-[3px] rounded-2xl  animate-border border border-emerald-500  hover:shadow-[0_0_45px_rgba(16,185,129,0.8)] transition-all duration-500 ">
          {/* Soft Transparent Form Background */}
          <div className="backdrop-blur-sm bg-black/10 rounded-2xl p-6 sm:p-8">
            {/* Logo & Heading */}
            <div className="text-center text-white mb-6">
              <h1 className="text-2xl fontStyle sm:text-3xl md:text-4xl font-bold tracking-wide">
                Learnova
              </h1>
              <p className="text-sm sm:text-base mt-1">Login to your account</p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLoginWithEmail} className="space-y-4">
              {/* Email Field */}
              <div>
                <label className="label text-white text-sm sm:text-base">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="input input-bordered w-full bg-white/80 text-black placeholder-gray-500"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Password Field */}
              <div>
                <label className="label text-white text-sm sm:text-base">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="input input-bordered w-full bg-white/80 text-black placeholder-gray-500"
                  placeholder="Enter your password"
                  required
                />
              </div>

              {/*Forget Password */}
              <div className="text-right">
                <a
                  href="#"
                  className="text-emerald-200 text-sm hover:underline"
                >
                  Forgot Password?
                </a>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="btn btn-primary w-full bg-emerald-500 hover:bg-emerald-600 border-none text-white"
              >
                Log In
              </button>
            </form>

            {/* OR Divider */}
            <div className="divider text-white mt-6">OR</div>

            {/* Social Logins */}
            <div className="space-y-5">
              <button className="btn btn-outline btn-primary w-full text-white">
                <FcGoogle className="text-xl mr-2" /> Continue with Google
              </button>
              <button className="btn btn-outline btn-info w-full">
                <FaGithub className="text-xl mr-2" />
                Continue with Github
              </button>
            </div>

            {/* Register Link */}
            <p className="text-center text-white mt-6 text-sm sm:text-base">
              Don’t have an account?{" "}
              <Link
                to="/auth/register"
                className="font-semibold underline text-emerald-200 hover:text-emerald-400"
              >
                Register for free
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
