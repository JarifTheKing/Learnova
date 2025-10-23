import { Link } from "react-router";
import { FaExclamationTriangle } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-emerald-100 via-emerald-50 to-white text-center px-6 overflow-hidden">
      {/* Icon */}
      <div className="text-6xl text-emerald-600 mb-6 animate-bounce">
        <FaExclamationTriangle />
      </div>

      {/* Error Code */}
      <h1 className="text-[120px] font-extrabold text-emerald-700 drop-shadow-lg">
        404
      </h1>

      {/* Message */}
      <p className="text-gray-600 text-lg max-w-md mb-8">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>

      {/* Back Button */}
      <Link
        to="/"
        className="inline-block px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-2xl shadow-md transition-all duration-300 hover:scale-105"
      >
        Go Back Home
      </Link>

      {/* Decorative Wave Footer */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-20"
        >
          <path
            d="M321.39,56.27C172.34,87,73,52.72,0,34.29V120H1200V0C1131.5,25.23,1026.29,66.45,872.44,80.49,678.57,97.95,548.39,24.6,321.39,56.27Z"
            className="fill-emerald-200"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default ErrorPage;
