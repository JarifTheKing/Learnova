import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CourseSlider = ({ skillsData }) => {
  return (
    <div className="my-2">
      {/* <h2 className="text-3xl font-bold text-center mb-6">Popular Courses</h2> */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="px-4"
      >
        {skillsData.map((course) => (
          <SwiperSlide key={course.skillId}>
            <div className="bg-white rounded-xl shadow-md border border-amber-100 overflow-hidden hover:shadow-xl transition duration-300 ">
              <img
                src={course.image}
                alt={course.skillName}
                className="w-full h-100 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-emerald-600">
                  {course.skillName}
                </h3>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                  {course.description}
                </p>
                <p className="text-emerald-600 font-bold mt-2">
                  ${course.price}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CourseSlider;
