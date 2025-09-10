import StudentActivites from "@/component/student/StudentActivites";
import React from "react";
import { IoCameraOutline } from "react-icons/io5";

const StudentPortalPage = () => {
  return (
    <div>
      <div className="w-full">
        <div className="w-full bg-transparent">
          <div className="w-full  py-4 bg-blue-100">
            <img
              src={"/image.png" || "/image.jpg"}
              alt="image"
              className="w-full object-contain h-[200px]"
            />
          </div>
          <div className="w-1/4 flex justify-center relative top-[-130px] bg-transparent border ">
            <div className="border">
              <div>
                <div className=" w-1/2 flex justify-center border">
                  <img
                    src="/image.jpg"
                    alt="image"
                    className="relative rounded-full  "
                  />
                </div>
              </div>
              <div className="left-30 bg-white rounded-full ">
                <div className="p-1">
                  <IoCameraOutline className="text-4xl " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex  left-32 m-2">
        <p>umesh joshi</p>
      </div>
      <div className="relative top-5 bg-green-400 w-2/9">
        <StudentActivites />
      </div>
    </div>
  );
};

export default StudentPortalPage;
