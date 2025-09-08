import React from "react";

const StudentPortalPage = () => {
  return (
    <div className="w-full bg-blue-100">
      <div className="w-full">
        <div className="w-full h-[100px]">
          <img
            src={"/image.png" || "/image.jpg"}
            alt="image"
            className="w-full object-contain h-[200px]"
          />
        </div>
        <div className="w-1/4 flex justify-center rounded-full relative top-20">
          <div className=" w-1/2 relative flex justify-center">
            <img
              src="/image.jpg"
              alt="image"
              className="relative rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPortalPage;
