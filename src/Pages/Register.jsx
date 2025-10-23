import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const { register, setUser } = useContext(AuthContext);

  const handleRegisterWithEmail = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log({ name, photo, email, password });

    register(email, password)
      .then((res) => {
        const user = res.user;
        setUser(user);
      })
      .catch((error) => {
        alert(error.code);
      });
  };

  return (
    <div className="my-4">
      <div className="min-h-screen flex items-center justify-center bg-[url('/light.jpg')] bg-black/50 bg-blend-overlay bg-cover bg-center bg-no-repeat rounded-lg px-4 sm:px-6 md:px-8">
        <div className="relative w-full max-w-sm sm:max-w-md p-[2px] rounded-2xl  animate-border border border-emerald-500  hover:shadow-[0_0_45px_rgba(16,185,129,0.8)] transition-all duration-500">
          {/* Inner glass box */}
          <div className="backdrop-blur-sm bg-black/10 rounded-2xl p-6 sm:p-8">
            {/* Logo & Heading */}
            <div className="text-center text-white mb-6">
              <h1 className="text-2xl fontStyle sm:text-3xl md:text-4xl font-bold tracking-wide">
                Learnova
              </h1>
              <p className="text-sm sm:text-base mt-1">
                Create your new account
              </p>
            </div>

            {/* Register Form */}
            <form onSubmit={handleRegisterWithEmail} className="space-y-4">
              {/* Name */}
              <div>
                <label className="label text-white text-sm sm:text-base">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="input input-bordered w-full bg-white/80 text-black placeholder-gray-500"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Photo */}
              <div>
                <label className="label text-white text-sm sm:text-base">
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photo"
                  className="input input-bordered w-full bg-white/80 text-black placeholder-gray-500"
                  placeholder="Paste your photo URL"
                />
              </div>

              {/* Email */}
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

              {/* Password */}
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

              {/* Button */}
              <button
                type="submit"
                className="btn btn-primary w-full bg-emerald-500 hover:bg-emerald-600 border-none text-white"
              >
                Register
              </button>
            </form>

            {/* OR Divider */}
            <div className="divider text-white mt-6">OR</div>

            {/* Social Logins */}
            <div className="space-y-5">
              <button className="btn btn-outline btn-primary w-full text-white">
                <FcGoogle className="text-xl mr-2" /> Continue with Google
              </button>
            </div>

            {/* Login Link */}
            <p className="text-center text-white mt-6 text-sm sm:text-base">
              Already have an account?{" "}
              <Link
                to="/auth/login"
                className="font-semibold underline text-emerald-200 hover:text-emerald-400"
              >
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
