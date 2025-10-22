import { FaUserFriends, FaUserTie } from "react-icons/fa";
import CourseCard from "../Pages/CourseCard";
import CourseSlider from "../Pages/CourseSlider";
import { useLoaderData, useNavigation } from "react-router";
import Spinner from "../Pages/Spinner";

const Home = () => {
  const skillsData = useLoaderData();
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <Spinner></Spinner>;
  }
  // const [courses, setCourses] = useState([]);

  // useEffect(() => {
  //   fetch("/skilledData.json")
  //     .then((res) => res.json())
  //     .then((data) => setCourses(data))
  //     .catch((error) => console.error("Error loading data:", error));
  // }, []);

  return (
    <div>
      {/* Carosal */}
      <CourseSlider skillsData={skillsData} />

      {/* Cards */}
      <div className="my-4 lg:my-8 bg-emerald-50 rounded-lg py-4 px-2">
        <h2 className="text-center mb-8  text-4xl font-bold">Popular Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-x-30 lg:gap-y-15 justify-items-center mx-auto max-w-7xl px-4">
          {skillsData.map((skill) => (
            <CourseCard key={skill.skillId} skill={skill}></CourseCard>
          ))}
        </div>
      </div>

      {/* Teachers */}

      <div className="flex flex-col md:flex-row w-full  p-8 gap-10 rounded-xl shadow-xl my-10">
        {/* Text Section */}
        <div className="w-full md:w-1/2 space-y-6">
          <p className="text-gray-400 font-semibold">Why Choose Us</p>
          <h2 className="text-4xl font-bold text-emerald-600">
            Transform Your Best Practice with Our Online Course
          </h2>

          {/* Card 1 */}
          <div className="my-4">
            <span className="flex items-center gap-6">
              <span>
                <FaUserFriends className="text-4xl bg-gray-200 rounded-lg p-1" />
              </span>
              <h3 className="text-2xl font-bold">Face-to-face Teaching</h3>
            </span>
            <p className="text-gray-600 mt-2">
              Experience interactive learning with expert instructors in
              real-time. Get personalized feedback and engage in live sessions
              designed to boost your confidence and understanding.
            </p>
          </div>

          {/* Card 2 */}
          <div>
            <span className="flex items-center gap-6">
              <span>
                <FaUserTie className="text-4xl bg-gray-200 rounded-lg p-1" />
              </span>
              <h3 className="text-2xl font-bold">24/7 Support Available</h3>
            </span>
            <p className="text-gray-600 mt-2">
              Our dedicated support team is always here to help — day or night.
              Whether you need technical help or study guidance, we ensure
              smooth learning without interruption.
            </p>
          </div>
        </div>

        {/* Images Section */}
        <div className="relative grid grid-cols-2 md:flex md:flex-nowrap gap-2 justify-center items-center">
          <img
            className="w-full h-64 md:h-80 object-cover rounded-lg border-2 border-white shadow-md md:mt-[-80px]"
            src="/girl-1.jpg"
            alt="Teacher 1"
          />
          <img
            className="w-full h-64 md:h-80 object-cover rounded-lg border-2 border-white shadow-md md:mt-[40px]"
            src="/man-1.jpg"
            alt="Teacher 2"
          />
          <img
            className="w-full h-64 md:h-80 object-cover rounded-lg border-2 border-white shadow-md md:mt-[-70px]"
            src="/girl-2.jpg"
            alt="Teacher 3"
          />
          <img
            className="w-full h-64 md:h-80 object-cover rounded-lg border-2 border-white shadow-md md:mt-[80px]"
            src="/man-2.jpg"
            alt="Teacher 4"
          />
        </div>
      </div>

      {/* How It Works Section */}

      <div className="bg-gray-50 shadow-lg my-8 lg:my-18 py-16 px-6 md:px-12 lg:px-20 rounded-lg mt-10">
        <h2 className="text-4xl font-bold text-center text-emerald-700 mb-12">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">
          {/* Step 1 */}
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-emerald-100 text-emerald-600 rounded-full text-2xl font-bold">
              <img
                width="64"
                height="64"
                src="https://img.icons8.com/arcade/64/search-database.png"
                alt="search-database"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-emerald-600">
              Browse Courses
            </h3>
            <p className="text-gray-600">
              Explore a wide range of expert-led courses designed to fit your
              learning goals and interests.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-emerald-100 text-emerald-600 rounded-full text-2xl font-bold">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color-glass/48/course-assign.png"
                alt="course-assign"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-emerald-600">
              Enroll & Learn
            </h3>
            <p className="text-gray-600">
              Choose your preferred course, enroll in a few clicks, and start
              learning anytime, anywhere.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-emerald-100 text-emerald-600 rounded-full text-2xl font-bold">
              <img
                width="84"
                height="84"
                src="https://img.icons8.com/3d-fluency/94/contract.png"
                alt="contract"
              />
            </div>
            <h3 className="text-xl text-emerald-600 font-semibold mb-2">
              Get Certified
            </h3>
            <p className="text-gray-600">
              Complete the course, test your knowledge, and earn a professional
              certificate to boost your career.
            </p>
          </div>
        </div>
      </div>

      {/* 🌟 How It Works Section */}
      <div className="relative bg-gradient-to-br from-emerald-50 via-white to-cyan-50 shadow-lg my-8 py-16 px-6 md:px-12 lg:px-20 rounded-2xl overflow-hidden">
        <h2 className="text-4xl font-bold text-center text-emerald-700 mb-14">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">
          {/* Step 1 */}
          <div className="group p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-transparent hover:border-emerald-200">
            <div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-emerald-100 to-emerald-50 group-hover:from-emerald-200 group-hover:to-cyan-100 transition-all duration-300">
              <img
                width="60"
                height="60"
                className="drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                src="https://img.icons8.com/arcade/64/search-database.png"
                alt="search-database"
              />
            </div>
            <h3 className="text-2xl font-semibold text-emerald-700 mb-3">
              Browse Courses
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Explore a wide range of expert-led courses designed to fit your
              learning goals and interests.
            </p>
          </div>

          {/* Step 2 */}
          <div className="group p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-transparent hover:border-emerald-200">
            <div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-emerald-100 to-emerald-50 group-hover:from-emerald-200 group-hover:to-cyan-100 transition-all duration-300">
              <img
                width="56"
                height="56"
                className="drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                src="https://img.icons8.com/color-glass/48/course-assign.png"
                alt="course-assign"
              />
            </div>
            <h3 className="text-2xl font-semibold text-emerald-700 mb-3">
              Enroll & Learn
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Choose your preferred course, enroll in a few clicks, and start
              learning anytime, anywhere.
            </p>
          </div>

          {/* Step 3 */}
          <div className="group p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-transparent hover:border-emerald-200">
            <div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-emerald-100 to-emerald-50 group-hover:from-emerald-200 group-hover:to-cyan-100 transition-all duration-300">
              <img
                width="74"
                height="74"
                className="drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                src="https://img.icons8.com/3d-fluency/94/contract.png"
                alt="contract"
              />
            </div>
            <h3 className="text-2xl font-semibold text-emerald-700 mb-3">
              Get Certified
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Complete the course, test your knowledge, and earn a professional
              certificate to boost your career.
            </p>
          </div>
        </div>

        {/* Background Blur Circles for Fancy Effect */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-200 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-cyan-200 rounded-full blur-3xl opacity-40"></div>
      </div>
    </div>
  );
};

export default Home;
