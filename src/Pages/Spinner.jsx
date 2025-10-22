import React from "react";
import { RingLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <RingLoader color="#10B981" size={90} speedMultiplier={1.2} />
    </div>
  );
};

export default Spinner;
