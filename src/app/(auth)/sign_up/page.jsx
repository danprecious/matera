"use client";

import Logo from "@/components/nav/logo";
import { useState } from "react";
import {
  FaArrowAltCircleDown,
  FaArrowDown,
  FaCheck,
  FaGoogle,
} from "react-icons/fa";

const SignUpPage = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  });
  const [success, setSuccess] = useState({
    password: false,
    confirmPassword: false,
  });

  const handleChange = (e) => {
    console.log(e.target.value);

    if (e.target.name === "email") {
      setData({ ...data, email: e.target.value });
    }
    if (e.target.name === "name") {
      setData({ ...data, name: e.target.value });
    }
    if (e.target.name === "password") {
      setData({ ...data, password: e.target.value });
      if (data.password === "" || data.password.length < 8) {
        setError({ ...error, password: "Please enter a strong password" });
      } else {
        setSuccess(true);
        setError({ ...error, password: "" });
        setTimeout(() => {
          setSuccess({ ...success, password: false });
        }, 1500);
      }
    }
    if (e.target.name === "confirmPassword") {
      setData({ ...data, confirmPassword: e.target.value });
      if (data.confirmPassword !== data.password) {
        setError({ ...error, confirmPassword: "Passwords don't match" });
      } else {
        setSuccess(true);
        setError({ ...error, confirmPassword: "" });
        setTimeout(() => {
          setSuccess({ ...success, confirmPassword: false });
        }, 1500);
      }
    }
  };

  const signUp = (e) => {
    e.preventDefault();
    // get email regex validation

    if (data.email === "") {
      setError({ ...error, email: "please enter a valid email" });
    }

    if (data.password.length < 8) {
      console.log("kkk");
      setError(() => ({
        ...error,
        password: "password length not strong enough",
      }));
    } else {
      setError({ ...error, password: "" });
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
                  onClick={() => signIn("google")}
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
              <form className="space-y-3 p-3" onSubmit={signUp}>
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
                      value={data.email}
                      required
                      onChange={(e) => handleChange(e)}
                      className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  {error.email && (
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
                      value={data.password}
                      onChange={(e) => handleChange(e)}
                      required
                      className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  {error.password && (
                    <div className="text-red-500 font-semibold text-xs p-2">
                      {error.password}
                    </div>
                  )}
                  {success.password && (
                    <div className="text-green-500 flex items-center font-semibold text-sm p-2">
                      <FaCheck />
                      <span className="ml-2">Password ok</span>
                    </div>
                  )}
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block mx-1 text-xs font-medium leading-6 text-gray-900"
                    >
                      Confirm password
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      value={data.confirmPassword}
                      onChange={(e) => handleChange(e)}
                      required
                      className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  {error.confirmPassword && (
                    <div className="text-red-500 font-semibold text-xs p-2">
                      {error.confirmPassword}
                    </div>
                  )}
                  {success.confirmPassword && (
                    <div className="text-green-500 flex items-center font-semibold text-sm p-2">
                      <FaCheck />
                      <span className="ml-2">Passwords match</span>
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
