"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { loginSchema } from "@/schema/login.schema";
import { yupResolver } from "@hookform/resolvers/yup";

const LoginComp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  return (
    <div className="w-full">
      <div className="w-full">
        <div className="w-full flex justify-center items-center max-sm:block">
          <div className="max-sm:w-full max-sm:flex max-sm:justify-center">
            <div className="max-sm:w-1/2 ">
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
          <div className="w-1/2  max-sm:w-full">
            <form
              onSubmit={handleSubmit((e) => {
                console.log("abcd", e);
              })}
              className="w-full  flex justify-center  "
            >
              <div className=" w-full p-3">
                <h1 className="text-center text-2xl font-bold text-blue-500">
                  login Page
                </h1>
                <div className="flex justify-center w-full px-1 py-1">
                  <div className="w-1/2 p-2 max-sm:w-full">
                    <div className="w-full p-2">
                      {errors.username?.message && (
                        <p className="text-red-500">
                          *{errors.username?.message}
                        </p>
                      )}
                      <div className="border w-full p-2 rounded-lg">
                        <input
                          className="outline-none w-full  "
                          type="text"
                          {...register("username")}
                          placeholder="Enter username"
                        />
                      </div>
                    </div>
                    {errors.password?.message && (
                      <p className="text-red-500">
                        *{errors.password?.message}
                      </p>
                    )}
                    <div className="w-full p-2 ">
                      <div className="border p-2 rounded-lg">
                        <input
                          className="outline-none  w-full"
                          type="text"
                          {...register("password")}
                          placeholder="Password"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center ">
                  <div className="w-1/2 px-5 max-sm:w-full">
                    <div>
                      <a href="/signup" className="text-blue-500">
                        Don't have an account?
                      </a>
                    </div>
                    <div>
                      <a href="/forget_password" className="text-blue-500">
                        Forget-Password?
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex  justify-center py-3">
                  <div className="w-1/2 flex  justify-center px-5 max-sm:w-3/4">
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-lg w-full">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default LoginComp;
