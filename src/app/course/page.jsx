import CourseComp from "@/component/course/CourseComp";
import React from "react";

const CoursePage = () => {
  const courseDetails = [
    {
      courseName: "science",
      courseCode: 12356,
      description: "this is ab out related to science",
      coursePicture: "abcd",
    },
  ];
  return (
    <div>
      <CourseComp />
    </div>
  );
};

export default CoursePage;
