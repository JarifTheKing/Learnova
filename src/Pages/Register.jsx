import React from "react";
import { Link } from "react-router";

const Register = () => {
  // const { createUser } = useContext(AuthContext);
  const handleRegisterWithEmail = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("Clicked", { email, password, name, photo });

    // createUser(email, password)
    //   .then((res) => {
    //     const user = res.user;
    //     console.log(user);
    //   })
    //   .catch((error) => {
    //     alert(error.code);
    //   });
  };

  return (
    <div className="my-10 ">
      <div className="min-h-screen rounded-md my-6 bg-[url('/light.jpg')] bg-black/50 bg-blend-overlay bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 sm:px-6 md:px-8">
        <div className=" backdrop-blur-sm bg-black/10 w-full max-w-sm sm:max-w-md p-6 sm:p-8 rounded-2xl shadow-2xl">
          {/* Logo & Heading */}
          <div className="text-center text-white mb-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide">
              Learnova
            </h1>
            <p className="text-sm sm:text-base mt-1">
              Register to your account
            </p>
          </div>

          {/* Register Form */}
          <form onSubmit={handleRegisterWithEmail} className="space-y-4">
            {/* Name Field */}
            <div>
              <label className="label text-white text-sm sm:text-base">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="input input-bordered w-full bg-white/80 text-black placeholder-gray-500"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Photo Field */}
            <div>
              <label className="label text-white text-sm sm:text-base">
                Photo
              </label>
              <input
                type="text"
                name="photo"
                className="input input-bordered w-full bg-white/80 text-black placeholder-gray-500"
                placeholder="Paste your Photo URL"
              />
            </div>

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

            <div className="text-right">
              <a href="#" className="text-emerald-200 text-sm hover:underline">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full bg-emerald-500 hover:bg-emerald-600 border-none text-white"
            >
              Log In
            </button>
          </form>

          {/* Register Link */}
          <p className="text-center text-white mt-6 text-sm sm:text-base">
            You have an account?{" "}
            <Link to="/login">
              <a
                href="#"
                className="font-semibold underline text-emerald-200 hover:text-emerald-400"
              >
                Log In
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
