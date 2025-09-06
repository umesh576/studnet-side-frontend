"use client";
import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [stdProfile, setStdProfile] = useState(true);
  return (
    <div className="relative w-full">
      <div className="w-full">
        <div className="flex w-full justify-between">
          <div>
            <Image src={"/image.png"} alt="logo" width={100} height={100} />
          </div>
          <div className="flex justify-between px-4 items-center w-full  ">
            <div className="flex w-full  justify-center">
              <ul className="flex  gap-10">
                <li>
                  <a
                    href=""
                    className="font-bold py-2 hover:bg-black hover:text-white rounded-lg px-2"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="font-bold py-2 hover:bg-black hover:text-white rounded-lg px-2"
                  >
                    Abput us
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="font-bold py-2 hover:bg-black hover:text-white rounded-lg px-2"
                  >
                    Courses
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="font-bold py-2 hover:bg-black hover:text-white rounded-lg px-2"
                  >
                    Student Portal
                  </a>
                </li>
                <li>
                  <a
                    href="apply_new_student"
                    className="font-bold py-2 hover:bg-black hover:text-white rounded-lg px-2"
                  >
                    Apply
                  </a>
                </li>
              </ul>
            </div>
            <div>
              {stdProfile ? (
                <div>
                  <button className="bg-blue-500 rounded-lg px-2 py-1">
                    Login/Signup
                  </button>
                </div>
              ) : (
                <div className="flex">
                  <Image
                    src={"/image.jpg"}
                    width={20}
                    height={30}
                    alt="image"
                  />
                  Profile
                </div>
              )}
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
