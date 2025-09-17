"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [stdProfile, setStdProfile] = useState(true);
  useEffect(() => {
    console.log("cookie: ", document.cookie);
  }, []);
  return (
    <div className="relative w-full">
      <div className="w-full ">
        <div className="flex w-full justify-between border">
          <div>
            <Image
              className="rounded-lg"
              src={"/image.png"}
              alt="logo"
              width={100}
              height={100}
            />
          </div>
          <div className="flex justify-between px-4 items-center w-full max-sm:hidden ">
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
            <div>
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
          <div>
            <div>
              <select
                name="Home"
                id="home"
                className="border p-2 rounded-full bg-black text-white"
              >
                <IoMenu />
                <option value="home">Home</option>
                <option value="home">joshi</option>
              </select>
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
