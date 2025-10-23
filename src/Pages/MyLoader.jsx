import React from "react";
import { Triangle } from "react-loader-spinner";

const MyLoader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <Triangle
        visible={true}
        height={200}
        width={200}
        color="#10B981"
        ariaLabel="triangle-loading"
      />
    </div>
  );
};

export default MyLoader;
