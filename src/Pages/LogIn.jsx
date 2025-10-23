import React, { useContext, useEffect, useRef, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
// import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import toast from "react-hot-toast";

const LogIn = () => {
  const { logIn, setUser, setLoading, user, signInWithGoogleFunc, loading } =
    useContext(AuthContext);

  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const emailRef = useRef(null);

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) navigate("/");
  }, [user, navigate]);

  // --- Log In With Email ---
  const handleLoginWithEmail = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setLoading(true);

    logIn(email, password)
      .then((res) => {
        const user = res.user;
        setLoading(false);
        setUser(user);
        toast.success("Login successful! Welcome back 👋");
        navigate(from);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        toast.error(error.code);
      });
  };

  // --- Log In With Google ---
  const handleGoogleSignin = () => {
    setLoading(true);
    signInWithGoogleFunc()
      .then((res) => {
        setLoading(false);
        setUser(res.user);
        toast.success("Login successful with Google 🎉");
        navigate(from);
      })
      .catch((e) => {
        setLoading(false);
        toast.error(e.code);
      });
  };

  // --- Forget Password ---
  // const handleForgetPassword = () => {
  //   const email = emailRef.current?.value;
  //   if (!email) {
  //     toast.error("Please enter your email first");
  //     return;
  //   }
  //   sendPassResetEmailFunc(email)
  //     .then(() => {
  //       setLoading(false);
  //       toast.success("Check your email to reset password");
  //     })
  //     .catch((e) => toast.error(e.message));
  // };

  return (
    <div className="my-4">
      <div className="min-h-screen bg-[url('/Brail.jpg')] bg-black/50 bg-blend-overlay bg-cover bg-center bg-no-repeat rounded-lg flex items-center justify-center px-4 sm:px-6 md:px-8">
        <div className="relative w-full max-w-sm sm:max-w-md p-[3px] rounded-2xl animate-border border border-emerald-500 hover:shadow-[0_0_45px_rgba(16,185,129,0.8)] transition-all duration-500">
          <div className="backdrop-blur-sm bg-black/10 rounded-2xl p-6 sm:p-8">
            <div className="text-center text-white mb-6">
              <h1 className="text-2xl text-emerald-600 fontStyle sm:text-3xl md:text-4xl font-bold tracking-wide">
                Learnova
              </h1>
              <p className="text-sm sm:text-base mt-1">Login to your account</p>
            </div>

            <form onSubmit={handleLoginWithEmail} className="space-y-4">
              {/* Email */}
              <div>
                <label className="label text-white text-sm sm:text-base">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  ref={emailRef}
                  className="input input-bordered w-full bg-white/80 text-black placeholder-gray-500"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Password */}
              <div className="relative">
                <label className="label text-white text-sm sm:text-base">
                  Password
                </label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  className="input input-bordered w-full bg-white/80 text-black placeholder-gray-500"
                  placeholder="Enter your password"
                  required
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-3 top-[38px] cursor-pointer text-gray-700"
                >
                  {show ? <FaEye /> : <IoEyeOff />}
                </span>
              </div>

              {/* Forget Password */}
              <div className="text-right">
                <button
                  type="button"
                  onClick={() =>
                    navigate("/forgetPass", {
                      state: { email: emailRef.current?.value || "" },
                    })
                  }
                  className="text-emerald-200 text-sm hover:underline"
                >
                  Forgot Password?
                </button>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary w-full bg-emerald-500 hover:bg-emerald-600 border-none text-white"
              >
                {loading ? "Logging in..." : "Log In"}
              </button>
            </form>

            {/* OR Divider */}
            <div className="divider text-white mt-6">OR</div>

            {/* Google Login */}
            <div className="space-y-5">
              <button
                onClick={handleGoogleSignin}
                disabled={loading}
                className="btn btn-outline btn-primary w-full text-white"
              >
                <FcGoogle className="text-xl mr-2" /> Continue with Google
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
