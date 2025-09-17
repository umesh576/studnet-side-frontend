"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";

const LoginComp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <div className="w-full">
      <div className="w-full">
        <div className="w-full flex justify-center items-center">
          <div className="w-1/2">
            <form action="" className="w-full border flex justify-center">
              <div className="border w-full p-3">
                <h1 className="text-center text-2xl font-bold text-blue-500">
                  login Page
                </h1>
                <div className="flex justify-center w-full p-3 py-5">
                  <div className="w-1/2 p-2">
                    <div className="w-full p-2">
                      <div className="border w-full p-3 rounded-lg">
                        {<div>{errors.username?.message}</div>}
                        <input
                          className="outline-none w-full "
                          type="text"
                          {...register("username", {
                            required: "Usernmae is required",
                          })}
                          placeholder="Enter username"
                        />
                      </div>
                    </div>
                    <div className="w-full p-2 ">
                      {<div>{errors.password?.message}</div>}
                      <div className="border p-3 rounded-lg">
                        <input
                          className="outline-none  w-full"
                          type="text"
                          {...register("password", {
                            required: true,
                            message: "Password is required.",
                          })}
                          placeholder="Password"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <button>submit</button>
                </div>
              </div>
            </form>
          </div>

          <div>
            <Image
              src={
                "https://media.istockphoto.com/id/2149186896/vector/girl-working-on-laptop-vector-illustration-working-from-home-and-freelance-concept.jpg?s=612x612&w=0&k=20&c=JD3Lc9oJaBtF4loCBhfq_xitz8rQyJCN1u7xSQDyrtw="
              }
              alt="image"
              height={500}
              width={500}
            />
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default LoginComp;
