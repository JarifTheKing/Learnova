import { useLoaderData, useParams, useNavigate } from "react-router";
import BookingForm from "../Pages/BookingForm";
import MyLoader from "../Pages/MyLoader";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const CourseDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const skillsData = useLoaderData();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (skillsData) setLoading(false);
  }, [skillsData]);

  if (loading) {
    return <MyLoader />;
  }

  const skill = skillsData.find((item) => item.skillId === parseInt(id));

  if (!skill) {
    return (
      <div className="text-center text-red-500 font-semibold mt-20">
        Course not found.
      </div>
    );
  }

  const handleEnroll = async () => {
    const enrollPromise = new Promise((resolve) => setTimeout(resolve, 2000));

    toast.promise(enrollPromise, {
      loading: "Enrolling...",
      success: `You have successfully enrolled in "${skill.skillName}" 🎓`,
      error: "Enrollment failed. Please try again.",
    });
  };
  return (
    <div>
      {/* --- Course --- */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 mt-8 justify-center items-center">
        <div className="w-[90%] lg:w-1/2">
          <img
            src={skill.image}
            alt={skill.skillName}
            className="w-full h-100 lg:h-full object-cover rounded-xl shadow-md"
          />
        </div>

        <div className="w-[90%] lg:w-1/2 bg-white p-8 rounded-2xl shadow-md border border-gray-100 space-y-8">
          <h2 className="text-4xl font-extrabold text-emerald-700">
            {skill.skillName}
          </h2>

          <p className="text-gray-500 text-sm uppercase tracking-wide">
            Provided by{" "}
            <span className="text-emerald-600 font-semibold">
              {skill.providerName}
            </span>
          </p>

          <div className="flex flex-wrap gap-4 mt-4 text-gray-700">
            <p className="bg-emerald-100 px-3 py-1 rounded-full text-sm font-medium">
              ⭐ Rating: {skill.rating}
            </p>
            <p className="bg-emerald-100 px-3 py-1 rounded-full text-sm font-medium">
              💰 Price: ${skill.price}
            </p>
            <p className="bg-emerald-100 px-3 py-1 rounded-full text-sm font-medium">
              🧑‍🎓 Slots: {skill.slotsAvailable}
            </p>
            <p className="bg-emerald-100 px-3 py-1 rounded-full text-sm font-medium">
              📚Category: {skill.category}
            </p>
          </div>

          <p className="mt-6 text-gray-700 leading-relaxed p-5 rounded-xl border-l-4 border-emerald-400 shadow-sm">
            {skill.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              onClick={handleEnroll}
              className="flex-1 btn bg-emerald-500 hover:bg-emerald-700 text-white text-base shadow-md transition-all duration-300"
            >
              Enroll Now
            </button>
            <button
              onClick={() => navigate(-1)}
              className="flex-1 btn border border-emerald-500 text-emerald-700 hover:bg-emerald-600 hover:text-white text-base shadow-sm transition-all duration-300"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>

      <BookingForm></BookingForm>
    </div>
  );
};

export default CourseDetails;
