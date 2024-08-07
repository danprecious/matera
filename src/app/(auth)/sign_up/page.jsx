"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import validator from "validator";
import Logo from "@/components/nav/logo";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import {
  FaArrowAltCircleDown,
  FaArrowDown,
  FaCheck,
  FaGoogle,
} from "react-icons/fa";

const SignUpPage = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
    general: "",
  });

  const schema = z
    .object({
      name: z.string().min(1, { message: "Name is required" }),
      email: z.string().email({ message: "Invalid email address" }),
      password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters long" })
        .regex(/[A-Z]/, {
          message: "Password must contain at least one uppercase letter",
        })
        .regex(/[a-z]/, {
          message: "Password must contain at least one lowercase letter",
        })
        .regex(/[0-9]/, {
          message: "Password must contain at least one number",
        }),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const signUp = async (data) => {
    console.log(data);

    try {
      const response = await axios.post("/api/register", data, {
        headers: {
            "Content-type": "application/json",
        },
      });
      router.push("/sign_in"); 
      console.log(response);
      return response;
    } catch (e) {
      setError({
        ...error,
        general: "User could not be created, try again later",
      }),
        setTimeout(() => setError({ ...error, general: "" }), 2000);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-[100vh]">
        <div className="w-[25em] px-4 py-7 md:my-auto mt-[] bg-slate-50 rounded-xl">
          <div className="flex justify-center ">
            <Logo />
          </div>

          <div className="flex  flex-1 flex-col  justify-center w-[100%]">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm pt-5 pb-2">
              <h2 className="text-center  font-bold leading-9 tracking-tight text-gray-900">
                Register an account
              </h2>
            </div>

            <div className="flex justify-center">
              <div className="text-center p-2 my-2 bg-blue-200 flex justify-center rounded-full hover:bg-red-400">
                <button
                  className="p-1 rounded-md flex"
                  // onClick={() => signIn("google")}
                >
                  <FaGoogle className="" />
                </button>
              </div>
            </div>

            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <p className="flex justify-center text-xs p-3 mt-4 font-medium items-center">
                Or sign up{" "}
                <span className="px-1">
                  <FaArrowDown />
                </span>
              </p>
              <form className="space-y-3 p-3" onSubmit={handleSubmit(signUp)}>
                {!!error.general && (
                  <div className="text-red-500 font-semibold text-center text-xs p-2">
                    {error.general}
                  </div>
                )}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs mx-1 font-medium leading-6 text-gray-900"
                  >
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      {...register("name")}
                      className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  {false && (
                    <div className="text-red-500 font-semibold text-xs p-2">
                      please fill out this field
                    </div>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs mx-1 font-medium leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      {...register("email")}
                      className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  {false && (
                    <div className="text-red-500 font-semibold text-xs p-2">
                      please fill out this field
                    </div>
                  )}
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block mx-1 text-xs font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      {...register("password")}
                      required
                      className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  {false && (
                    <div className="text-red-500 font-semibold text-xs p-2">
                      {error.password}
                    </div>
                  )}
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="confirmPassword"
                      className="block mx-1 text-xs font-medium leading-6 text-gray-900"
                    >
                      Confirm Password
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      {...register("confirmPassword")}
                      required
                      className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  {false && (
                    <div className="text-red-500 font-semibold text-xs p-2">
                      {error.password}
                    </div>
                  )}
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-blue-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
