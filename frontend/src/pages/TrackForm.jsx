import React, { useState } from "react";
import { CourseSelection } from "../Redux/courseReducer/action";

const TrackForm = () => {
  const [courseTrack, setCourseTrack] = useState("");

  const handleCourseTrackChange = (e) => {
    setCourseTrack(e.target.value);
  };

  console.log("courseTrack track form wala", courseTrack);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    CourseSelection(courseTrack);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
        <h2 className="text-3xl text-gray-800 font-semibold mb-6">
          Profile Details
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="lastname"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Last Name
            </label>
            <input
              type="text"
              id="text"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="Enter your last name"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="courseTrack"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Select a course Track
            </label>
            <div>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  name="courseTrack"
                  value="MERN"
                  checked={courseTrack === "MERN"}
                  onChange={handleCourseTrackChange}
                />
                <span className="ml-2">MERN</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  className="form-radio"
                  name="courseTrack"
                  value="JAVA"
                  checked={courseTrack === "JAVA"}
                  onChange={handleCourseTrackChange}
                />
                <span className="ml-2">JAVA</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  className="form-radio"
                  name="courseTrack"
                  value="NODE"
                  checked={courseTrack === "NODE"}
                  onChange={handleCourseTrackChange}
                />
                <span className="ml-2">NODE</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  className="form-radio"
                  name="courseTrack"
                  value="Behavioural"
                  checked={courseTrack === "Behavioural"}
                  onChange={handleCourseTrackChange}
                />
                <span className="ml-2">Behavioural</span>
              </label>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TrackForm;
