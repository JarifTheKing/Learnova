import { FaUserFriends, FaUserTie } from "react-icons/fa";
import CourseCard from "../Pages/CourseCard";
import CourseSlider from "../Pages/CourseSlider";
import { useLoaderData, useNavigation } from "react-router";
import MyLoader from "../Pages/MyLoader";
import { useEffect, useState } from "react";

const Home = () => {
  const skillsData = useLoaderData();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading || navigation.state === "loading") {
    return <MyLoader />;
  }

  return (
    <div>
      {/* --- Carousel Section --- */}
      <CourseSlider skillsData={skillsData} />

      {/* ---Skills cards Section --- */}
      <div className="my-8 bg-emerald-50 rounded-lg py-8 px-4">
        <h2 className="text-center mb-10 text-4xl font-bold text-emerald-700">
          Explore Popular Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center mx-auto ">
          {skillsData.map((skill) => (
            <CourseCard key={skill.skillId} skill={skill} />
          ))}
        </div>
      </div>

      {/* --- Teachers --- */}
      <div className="flex flex-col md:flex-row w-full p-8 gap-10 rounded-xl shadow-xl my-10 bg-white">
        {/* Text Section */}
        <div className="w-full md:w-1/2 space-y-6">
          <p className="text-gray-400 font-semibold">Why Choose Learnova</p>
          <h2 className="text-4xl font-bold text-emerald-600 leading-snug">
            Learn Smarter, Grow Faster with Our Online Courses
          </h2>

          {/* Learning */}
          <div className="my-4">
            <span className="flex items-center gap-6">
              <FaUserFriends className="text-4xl bg-gray-100 rounded-lg p-2 text-emerald-600" />
              <h3 className="text-2xl font-semibold">Interactive Learning</h3>
            </span>
            <p className="text-gray-600 mt-2">
              Join real-time sessions and connect directly with expert
              instructors. Get personal feedback and learn through hands-on
              practice.
            </p>
          </div>

          {/* Support */}
          <div>
            <span className="flex items-center gap-6">
              <FaUserTie className="text-4xl bg-gray-100 rounded-lg p-2 text-emerald-600" />
              <h3 className="text-2xl font-semibold">24/7 Student Support</h3>
            </span>
            <p className="text-gray-600 mt-2">
              Our support team is here whenever you need help — whether it's
              technical assistance or study guidance, we’ve got you covered.
            </p>
          </div>
        </div>

        {/* Images Section */}
        <div className="relative grid grid-cols-2 md:flex md:flex-nowrap gap-3 justify-center items-center">
          <img
            className="w-full h-64 md:h-80 object-cover rounded-lg border-2 border-white shadow-md md:mt-[-80px]"
            src="/girl-1.jpg"
            alt="Instructor 1"
          />
          <img
            className="w-full h-64 md:h-80 object-cover rounded-lg border-2 border-white shadow-md md:mt-[40px]"
            src="/man-1.jpg"
            alt="Instructor 2"
          />
          <img
            className="w-full h-64 md:h-80 object-cover rounded-lg border-2 border-white shadow-md md:mt-[-70px]"
            src="/girl-2.jpg"
            alt="Instructor 3"
          />
          <img
            className="w-full h-64 md:h-80 object-cover rounded-lg border-2 border-white shadow-md md:mt-[80px]"
            src="/man-2.jpg"
            alt="Instructor 4"
          />
        </div>
      </div>

      {/* --- How It Works --- */}
      <div className="relative shadow-lg my-12 py-16 px-6 md:px-12 lg:px-20 rounded-2xl bg-white">
        <h2 className="text-4xl font-bold text-center text-emerald-700 mb-14">
          How Learnova Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10  mx-auto text-center">
          {/* Browse */}
          <div className="group p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-transparent hover:border-emerald-200">
            <div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-emerald-100 to-emerald-50 group-hover:from-emerald-200 group-hover:to-cyan-100 transition-all duration-300">
              <img
                width="60"
                height="60"
                className="drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                src="https://img.icons8.com/arcade/64/search-database.png"
                alt="search courses"
              />
            </div>
            <h3 className="text-2xl font-semibold text-emerald-700 mb-3">
              Browse Courses
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Discover top-rated courses tailored to your learning goals and
              career path.
            </p>
          </div>

          {/* Enroll */}
          <div className="group p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-transparent hover:border-emerald-200">
            <div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-emerald-100 to-emerald-50 group-hover:from-emerald-200 group-hover:to-cyan-100 transition-all duration-300">
              <img
                width="56"
                height="56"
                className="drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                src="https://img.icons8.com/color-glass/48/course-assign.png"
                alt="enroll course"
              />
            </div>
            <h3 className="text-2xl font-semibold text-emerald-700 mb-3">
              Enroll & Learn
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Enroll with just a few clicks and start learning instantly on any
              device.
            </p>
          </div>

          {/* Certificate */}
          <div className="group p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-transparent hover:border-emerald-200">
            <div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-emerald-100 to-emerald-50 group-hover:from-emerald-200 group-hover:to-cyan-100 transition-all duration-300">
              <img
                width="74"
                height="74"
                className="drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                src="https://img.icons8.com/3d-fluency/94/contract.png"
                alt="certificate"
              />
            </div>
            <h3 className="text-2xl font-semibold text-emerald-700 mb-3">
              Earn Your Certificate
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Complete your course, test your skills, and earn a professional
              certificate to enhance your career.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
