import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
// import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import toast from "react-hot-toast";
import Container from "../Shared/Container";

const Register = () => {
  const {
    register,
    setUser,
    updateProfileFunc,
    setLoading,
    signInWithGoogleFunc,
  } = useContext(AuthContext);

  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleRegisterWithEmail = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // console.log({ displayName, photoURL, email, password });

    const regExp =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()\-_=+])[A-Za-z\d@$!%*?&#^()\-_=+]{8,}$/;

    console.log(regExp.test(password));

    if (!regExp.test(password)) {
      setPasswordError(
        " Password must include uppercase, lowercase, number & special character!"
      );
      return;
    } else {
      setPasswordError("");
    }

    register(email, password)
      .then((res) => {
        const user = res.user;
        updateProfileFunc(displayName, photoURL)
          .then(() => {
            setUser({ ...user, displayName, photoURL });
            toast.success("Signup successful 🎉 Welcome to Learnova!");
            navigate(location?.state?.from || "/");
          })
          .catch((e) => {
            console.log(e);
            toast.error(e.code);
          });
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.code);
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
        navigate("/");
      })
      .catch((e) => {
        setLoading(false);
        toast.error(e.code);
      });
  };

  return (
    <Container>
      <div className="my-4">
        <div className="min-h-screen flex items-center justify-center bg-[url('/light.jpg')] bg-black/50 bg-blend-overlay bg-cover bg-center bg-no-repeat rounded-3xl px-4 sm:px-6 md:px-8">
          <div className="relative w-full max-w-sm sm:max-w-md p-[2px] rounded-2xl animate-border border border-emerald-500 hover:shadow-[0_0_45px_rgba(16,185,129,0.8)] transition-all duration-500">
            <div className="backdrop-blur-sm bg-black/10 rounded-2xl p-6 sm:p-8">
              <div className="text-center text-white mb-6">
                <h1 className="text-2xl text-emerald-600 fontStyle sm:text-3xl md:text-4xl font-bold tracking-wide">
                  Learnova
                </h1>
                <p className="text-sm sm:text-base mt-1">
                  Register your new account
                </p>
              </div>

              {/* Form */}
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
                    onChange={(e) => setEmail(e.target.value)}
                    className="input input-bordered w-full bg-white/80 text-black placeholder-gray-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {/* Password */}
                <div className="relative">
                  <label className="block label text-white text-sm sm:text-base">
                    Password
                  </label>
                  <input
                    type={show ? "text" : "password"}
                    name="password"
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="input input-bordered w-full bg-white/80 text-black placeholder-gray-500"
                    required
                  />
                  <span
                    onClick={() => setShow(!show)}
                    className="absolute right-[8px] top-[36px] cursor-pointer z-50"
                  >
                    {show ? <FaEye /> : <IoEyeOff />}
                  </span>

                  {/* <p className="text-[12px] text-start border-b border-amber-500 text-red-200 mt-5 mb-8 inline-block">
                  Use uppercase, lowercase, number & special character.
                </p> */}

                  {passwordError && (
                    <p className="text-White bg-red-500 p-2 rounded-md  text-center text-[14px] mt-[10px] mb-2 text-start">
                      {passwordError}
                    </p>
                  )}
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

              {/* Google Login */}
              <div className="space-y-5">
                <button
                  onClick={handleGoogleSignin}
                  className="btn btn-outline btn-primary w-full text-white"
                >
                  <FcGoogle className="text-xl mr-2" /> Continue with Google
                </button>
              </div>

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
    </Container>
  );
};

export default Register;
