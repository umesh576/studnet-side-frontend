import React from "react";

const StudentPortalPage = () => {
  return (
    <div className="w-full">
      <div className="w-full">
        <div className="w-full h-[300px]">
          <img
            src={"/image.png" || "/image.jpg"}
            alt="image"
            className="w-full object-contain h-[300px]"
          />
        </div>
        <div className="w-1/7">
          <div className="w-1/2 relative flex justify-center">
            <img
              src="/image.jpg"
              alt="image"
              className="relative top-[-50px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPortalPage;
