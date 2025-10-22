import React from "react";
import { useNavigate } from "react-router";

const CourseDetails = () => {
  const navigate = useNavigate();
  return (
    <div>
      CourseDetails CourseDetails
      <button onClick={() => navigate(-1)} className="btn btn-secondary">
        Go Back
      </button>
    </div>
  );
};

export default CourseDetails;
