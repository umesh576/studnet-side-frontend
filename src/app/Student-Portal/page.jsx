import StudentActivites from "@/component/student/StudentActivites";
import React from "react";
import { IoCameraOutline } from "react-icons/io5";

const StudentPortalPage = () => {
  return (
    <div className="w-full bg-blue-100">
      <div className="w-full">
        <div className="w-full h-[100px] py-4">
          <img
            src={"/image.png" || "/image.jpg"}
            alt="image"
            className="w-full object-contain h-[200px]"
          />
        </div>
        <div className="w-1/4 flex justify-center rounded-full relative top-20">
          <div className=" w-1/2  flex justify-center  relative ">
            <img
              src="/image.jpg"
              alt="image"
              className="relative rounded-full"
            />
          </div>
        </div>
        <div className="relative top-7 left-50 bg-white rounded-full">
          <div className="p-1">
            <IoCameraOutline className="text-5xl " />
          </div>
        </div>
      </div>
      <div className="relative top-5 bg-green-400 w-2/9">
        <StudentActivites />
      </div>
    </div>
  );
};

export default StudentPortalPage;
