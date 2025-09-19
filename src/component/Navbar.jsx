"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import { GiCrossMark } from "react-icons/gi";

const Navbar = () => {
  const [stdProfile, setStdProfile] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative w-full">
      <div className="w-full ">
        <div className="flex w-full justify-between">
          <div className="max-sm:w-full">
            <Image
              className="rounded-lg"
              src={"/image.png"}
              alt="logo"
              width={100}
              height={100}
            />
          </div>
          <div className="flex justify-between px-4 items-center w-full  ">
            <div className="flex w-full  justify-center max-sm:hidden">
              <ul className="flex  gap-10">
                <li>
                  <a
                    href="/"
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
                    className="font-bold py-2 hover:bg-black hover:text-white rounded-lg px-2 hover:bgChange"
                  >
                    Courses
                  </a>
                </li>
                <li>
                  <a
                    href="/Student-Portal"
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
            <div className="max-sm:hidden">
              {stdProfile ? (
                <a href="/login">
                  <div>
                    <button className="bg-blue-500 rounded-lg px-2 py-1">
                      Login/Signup
                    </button>
                  </div>
                </a>
              ) : (
                <div className="flex bg-blue-500 rounded-lg px-2  ">
                  <button type="button" className="flex p-1 px-2 gap-1 ">
                    <Image
                      src={"/image.jpg"}
                      width={20}
                      height={30}
                      alt="image"
                      className="rounded-full"
                    />
                    Profile
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center p-3">
            <div>
              <button
                className="hidden p-2 rounded-full bg-black text-white max-sm:block cursor-pointer"
                onClick={() => setIsOpen((prev) => !prev)}
              >
                {!isOpen && <IoMenu />}
                {isOpen && <GiCrossMark />}
              </button>
            </div>
          </div>
          {/* this is for mobile view */}
        </div>

        {isOpen && (
          <div className="flex justify-end ">
            <div className="block w-1/3 absolute">
              <div className="hover:bg-black hover:text-white">
                <a href="/">Home</a>
              </div>
              <div className="hover:bg-black hover:text-white">
                <a href="/Student-Portal">Student Portal</a>
              </div>
              <div className="hover:bg-black hover:text-white">
                <a href="/about-us">AboutUs</a>
              </div>
              <div className="hover:bg-black hover:text-white">
                <a href="Course">Course</a>
              </div>
            </div>{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
