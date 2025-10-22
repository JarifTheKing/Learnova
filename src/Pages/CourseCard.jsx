import React from "react";
import { Link } from "react-router";

const CourseCard = ({ skill }) => {
  const { image, skillName, rating, price } = skill;

  return (
    <div className="flex justify-center">
      <div className="card bg-base-100 w-[320px] h-[450px] shadow-md border border-amber-100 flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        {/* Image Section */}
        <figure className="rounded-t-lg bg-gray-100 h-[200px] overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src={image}
            alt={skillName}
          />
        </figure>

        {/* Content Section */}
        <div className="card-body flex flex-col justify-between px-4 py-4">
          <div>
            <h2 className="card-title text-lg font-semibold text-gray-800 truncate">
              {skillName}
            </h2>

            <hr className="my-2 border-gray-200" />

            <div className="flex justify-between items-center text-sm text-gray-700">
              <p>⭐ Rating: {rating}</p>
              <p> Price: {price} $</p>
            </div>
          </div>

          <Link to="/courseDetails" className="mt-4">
            <button className="btn w-full bg-emerald-600 hover:bg-cyan-700 text-white text-sm sm:text-base">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
