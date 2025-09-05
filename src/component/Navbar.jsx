import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="relative">
      <div>
        <div className="flex">
          <div>
            <Image src={"/image.png"} alt="logo" width={100} height={100} />
          </div>
          <div>
            <div>
              <ul>
                <li>
                  <a href="">Student Portal</a>
                </li>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Abput us</a>
                </li>
                <li>
                  <a href="">Courses</a>
                </li>
                <li>
                  <a href="">Apply</a>
                </li>
              </ul>
            </div>
          </div>
          {/* this is for mobile view */}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
