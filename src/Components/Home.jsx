import { FaUserFriends, FaUserTie, FaStar } from "react-icons/fa";
import CourseCard from "../Pages/CourseCard";
import CourseSlider from "../Pages/CourseSlider";
import { Link, useLoaderData, useNavigation } from "react-router";
import MyLoader from "../Pages/MyLoader";
import { useEffect, useState } from "react";
import Container from "../Shared/Container";

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
      <Container>
        <div className="my-8">
          <CourseSlider skillsData={skillsData} />
        </div>
      </Container>

      {/* --- Skills cards Section --- */}
      <Container>
        <div className="my-8 bg-emerald-50 rounded-3xl py-8 px-4">
          <h2 className="text-center mb-10 text-4xl font-bold text-emerald-700">
            Explore Popular Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center mx-auto">
            {skillsData.slice(0, 4).map((skill) => (
              <CourseCard key={skill.skillId} skill={skill} />
            ))}
          </div>
          {/* Explore All button */}
          {/* <div className="flex justify-center mt-6">
            <Link to="/all-courses">
              <button className="btn bg-emerald-600 hover:bg-cyan-700 text-white text-sm sm:text-base">
                Explore All
              </button>
            </Link>
          </div> */}
        </div>
      </Container>

      {/* --- Call To Action Section --- */}
      <Container>
        <div className="my-20 bg-gradient-to-br from-emerald-600 to-cyan-600 text-white rounded-3xl py-16 px-8 shadow-xl text-center">
          <h2 className="text-4xl font-bold mb-4">
            Start Your Learning Journey Today
          </h2>
          <p className="max-w-2xl mx-auto text-lg opacity-90 mb-8">
            Gain the skills you need to level up your career. Join thousands of
            learners and explore high-quality professional courses on Learnova.
          </p>

          <Link to="/all-courses">
            <button className="btn bg-white text-emerald-700 hover:bg-emerald-400 hover:text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-md transition">
              Explore Courses
            </button>
          </Link>
        </div>
      </Container>

      {/* --- Top Rated Providers --- */}
      <Container>
        <div className="py-16 px-6 md:px-12 rounded-3xl shadow-md mt-16 bg-emerald-50 my-8">
          <h2 className="text-4xl font-bold text-center text-emerald-700 mb-12">
            Top Rated Providers !
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card-1 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden text-center p-6 border border-emerald-100 hover:-translate-y-2">
              <img
                src="/Sarah-Johnson.png"
                alt="Dr. Sarah Johnson"
                className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-emerald-200 mb-4 transition-transform duration-300 hover:scale-105"
              />
              <h3 className="text-xl font-semibold text-emerald-700">
                Dr. Sarah Johnson
              </h3>
              <p className="text-gray-500 text-sm">Data Science</p>
              <div className="flex items-center justify-center gap-1 mt-3">
                <FaStar className="text-yellow-500" />
                <span className="font-medium text-gray-700">4.9</span>
              </div>
              <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                With over 10 years of experience in AI and analytics, Dr. Sarah
                helps learners master data-driven decision-making and advanced
                ML techniques.
              </p>
            </div>

            {/* Card-2 */}
            <div className="bg-white hidden sm:block rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden text-center p-6 border border-emerald-100 hover:-translate-y-2">
              <img
                src="/james.jpeg"
                alt="James Miller"
                className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-emerald-200 mb-4 transition-transform duration-300 hover:scale-105"
              />
              <h3 className="text-xl font-semibold text-emerald-700">
                James Miller
              </h3>
              <p className="text-gray-500 text-sm">Web Development</p>
              <div className="flex items-center justify-center gap-1 mt-3">
                <FaStar className="text-yellow-500" />
                <span className="font-medium text-gray-700">4.8</span>
              </div>
              <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                A full-stack developer and educator, James specializes in React,
                Node, and modern web technologies with a focus on hands-on
                learning.
              </p>
            </div>

            {/* Card-3 */}
            <div className="bg-white hidden sm:block rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden text-center p-6 border border-emerald-100 hover:-translate-y-2">
              <img
                src="/ethen.jpeg"
                alt="Ethan Brown"
                className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-emerald-200 mb-4 transition-transform duration-300 hover:scale-105"
              />
              <h3 className="text-xl font-semibold text-emerald-700">
                Ethan Brown
              </h3>
              <p className="text-gray-500 text-sm">Cybersecurity</p>
              <div className="flex items-center justify-center gap-1 mt-3">
                <FaStar className="text-yellow-500" />
                <span className="font-medium text-gray-700">4.9</span>
              </div>
              <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                A cybersecurity expert and ethical hacker, Ethan teaches
                practical security concepts to help students protect systems and
                build safe apps.
              </p>
            </div>

            {/* Card-4 */}
            <div className="bg-white hidden sm:block rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden text-center p-6 border border-emerald-100 hover:-translate-y-2">
              <img
                src="/Emily.jpeg"
                alt="Emily Davis"
                className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-emerald-200 mb-4 transition-transform duration-300 hover:scale-105"
              />
              <h3 className="text-xl font-semibold text-emerald-700">
                Emily Davis
              </h3>
              <p className="text-gray-500 text-sm">Graphic Design</p>
              <div className="flex items-center justify-center gap-1 mt-3">
                <FaStar className="text-yellow-500" />
                <span className="font-medium text-gray-700">4.7</span>
              </div>
              <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                A creative designer with 8+ years in branding and digital art,
                Emily empowers learners to express ideas visually using modern
                design tools.
              </p>
            </div>

            {/* Card-5 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden text-center p-6 border border-emerald-100 hover:-translate-y-2">
              <img
                src="/Liam.jpeg"
                alt="Liam Thompson"
                className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-emerald-200 mb-4 transition-transform duration-300 hover:scale-105"
              />
              <h3 className="text-xl font-semibold text-emerald-700">
                Liam Thompson
              </h3>
              <p className="text-gray-500 text-sm">Digital Marketing</p>
              <div className="flex items-center justify-center gap-1 mt-3">
                <FaStar className="text-yellow-500" />
                <span className="font-medium text-gray-700">4.8</span>
              </div>
              <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                Liam helps students master SEO, content strategy, and ads
                management, offering real-world techniques to grow businesses
                online.
              </p>
            </div>

            {/* Card-6 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden text-center p-6 border border-emerald-100 hover:-translate-y-2">
              <img
                src="/Olivia.jpeg"
                alt="Olivia Martinez"
                className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-emerald-200 mb-4 transition-transform duration-300 hover:scale-105"
              />
              <h3 className="text-xl font-semibold text-emerald-700">
                Olivia Martinez
              </h3>
              <p className="text-gray-500 text-sm">UI/UX Design</p>
              <div className="flex items-center justify-center gap-1 mt-3">
                <FaStar className="text-yellow-500" />
                <span className="font-medium text-gray-700">5.0</span>
              </div>
              <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                Olivia is a UX strategist and mentor who teaches user-centered
                design, usability testing, and how to create delightful digital
                experiences.
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* --- Choose--- */}
      <Container>
        <div className="flex flex-col lg:flex-row w-full p-8 gap-10 rounded-3xl shadow-xl my-8 bg-emerald-50">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 space-y-6">
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
          <div className="relative grid grid-cols-2 lg:flex lg:flex-nowrap gap-3 justify-center items-center">
            <img
              className="w-full h-64 lg:h-60 object-cover rounded-lg border-2 border-white shadow-md lg:mt-[-110px]"
              src="/girl-1.jpg"
              alt="Instructor 1"
            />

            <img
              className="w-full h-64 lg:h-60 object-cover rounded-lg border-2 border-white shadow-md lg:mt-[40px]"
              src="/man-1.jpg"
              alt="Instructor 2"
            />
            <img
              className="w-full h-64 lg:h-60 object-cover rounded-lg border-2 border-white shadow-md lg:mt-[-70px]"
              src="/girl-2.jpg"
              alt="Instructor 3"
            />
            <img
              className="w-full h-64 lg:h-60 object-cover rounded-lg border-2 border-white shadow-md lg:mt-[80px]"
              src="/man-2.jpg"
              alt="Instructor 4"
            />
          </div>
        </div>
      </Container>

      {/* --- Testimonials Section --- */}
      <Container>
        <div className="my-16 py-16 px-6 md:px-12 bg-emerald-50 rounded-3xl shadow-lg">
          <h2 className="text-4xl font-bold text-center text-emerald-700 mb-12">
            What Our Students Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 border border-emerald-100 hover:-translate-y-2">
              <p className="text-gray-600 italic leading-relaxed">
                “Learnova helped me take my web development skills to the next
                level. The instructors explain everything clearly!”
              </p>
              <div className="mt-6 flex items-center gap-4">
                <img
                  src="/Ariana.jpg"
                  alt="Student"
                  className="w-14 h-14 rounded-full object-cover border-2 border-emerald-300"
                />
                <div>
                  <h4 className="font-semibold text-emerald-700">
                    Ariana Gomez
                  </h4>
                  <p className="text-gray-500 text-sm">Web Developer</p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 border border-emerald-100 hover:-translate-y-2">
              <p className="text-gray-600 italic leading-relaxed">
                “Practical projects and real-time support made my learning
                smooth and enjoyable. Highly recommended!”
              </p>
              <div className="mt-6 flex items-center gap-4">
                <img
                  src="/Michael .jpg"
                  alt="Student"
                  className="w-14 h-14 rounded-full object-cover border-2 border-emerald-300"
                />
                <div>
                  <h4 className="font-semibold text-emerald-700">
                    Michael Brown
                  </h4>
                  <p className="text-gray-500 text-sm">Data Analyst</p>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 border border-emerald-100 hover:-translate-y-2">
              <p className="text-gray-600 italic leading-relaxed">
                “The UI/UX courses completely improved my design workflow. The
                platform's learning experience is excellent!”
              </p>
              <div className="mt-6 flex items-center gap-4">
                <img
                  src="/Sophia.jpg"
                  alt="Student"
                  className="w-14 h-14 rounded-full object-cover border-2 border-emerald-300"
                />
                <div>
                  <h4 className="font-semibold text-emerald-700">
                    Sophia Griffith
                  </h4>
                  <p className="text-gray-500 text-sm">UI/UX Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* --- How It Works --- */}
      <Container>
        <div className="relative shadow-lg my-8 py-16 px-6 md:px-12 lg:px-20 rounded-2xl bg-emerald-50">
          <h2 className="text-4xl font-bold text-center text-emerald-700 mb-14">
            How Learnova Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto text-center">
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
                Enroll with just a few clicks and start learning instantly on
                any device.
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
      </Container>
    </div>
  );
};

export default Home;
