import React, { useState } from "react";
import CourseCard from "./CourseCard";
import { useLoaderData } from "react-router";
import Container from "../Shared/Container";

const AllCourses = () => {
  const skillsData = useLoaderData();

  const [sortOrder, setSortOrder] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");

  // Unique Categories
  const categories = [
    "all",
    ...new Set(skillsData.map((item) => item.category)),
  ];

  // --- FILTERING FIRST ---
  const filteredData =
    filterCategory === "all"
      ? skillsData
      : skillsData.filter((item) => item.category === filterCategory);

  // --- SORTING ---
  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortOrder) return 0;

    const fieldA = a.title || "";
    const fieldB = b.title || "";

    return sortOrder === "asc"
      ? fieldA.localeCompare(fieldB)
      : fieldB.localeCompare(fieldA);
  });

  return (
    <Container>
      <div className="my-8">
        <h1 className="text-center text-4xl font-bold text-emerald-700 mb-6">
          All Courses
        </h1>

        {/* Sort + Filter */}
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-8 bg-emerald-50 p-4 rounded-xl">
          {/* Filter Categories */}
          <select
            className="select select-bordered w-full md:w-1/3 bg-white"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat === "all" ? "All Categories" : cat}
              </option>
            ))}
          </select>

          {/* Sort Titles */}
          <select
            className="select select-bordered w-full md:w-1/3 bg-white"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="">Sort by Title</option>
            <option value="asc">Title: A → Z</option>
            <option value="desc">Title: Z → A</option>
          </select>
        </div>

        {/* Course Grid */}
        {sortedData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {sortedData.map((skill) => (
              <CourseCard key={skill.skillId} skill={skill} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 text-lg mt-10">
            No items found based on your filter.
          </p>
        )}
      </div>
    </Container>
  );
};

export default AllCourses;
