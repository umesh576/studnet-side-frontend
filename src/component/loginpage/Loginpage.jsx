import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";

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
          <div>
            <h1>login page</h1>
            <div>
              <div>
                {<div>{errors.username}</div>}
                <input
                  type="text"
                  {...register("username", {
                    required: "Usernmae is required",
                  })}
                />
              </div>
            </div>
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
      </div>
    </div>
  );
};

export default LoginComp;
