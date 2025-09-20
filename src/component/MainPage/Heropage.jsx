"use client";
import React from "react";
import { useRouter } from "next/navigation";
const Heropage = () => {
  const router = useRouter();
  return (
    <div>
      <div className="inset-0 bg-white backdrop-blur-md">
        <div className="h-100 bg-[url('https://media.istockphoto.com/id/171306436/photo/red-brick-high-school-building-exterior.jpg?s=612x612&w=0&k=20&c=vksDyCVrfCpvb9uk4-wcBYu6jbTZ3nCOkGHPSgNy-L0=')] bg-cover bg-center  ">
          <div className="bg-white/30 w-full h-full  flex  items-center">
            <div className=" ">
              <h1 className="text-8xl font-bold text-blue-500  text-start items-center">
                School of Umesh Technology
              </h1>
              <div className="flex max-sm:block gap-5 w-full mt-5 relative justify-center">
                <div>
                  <button className="px-10 py-3 text-2xl bg-black text-white hover:text-black hover:bg-gray-400 text-center font-bold cursor-pointer rounded-lg border-1 border-white">
                    See Course
                  </button>
                </div>
                <div>
                  <button className="px-10 py-3 text-2xl bg-white text-black  hover:bg-orange-400 hover:text-white text-center font-bold cursor-pointer rounded-lg border border-white animate-pulse">
                    Take a Enrollment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heropage;
