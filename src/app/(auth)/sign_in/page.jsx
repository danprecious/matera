"use client";

import { login } from "@/app/actions/authenticate";
import { performLogin } from "@/app/actions/login";

import Logo from "@/components/nav/logo";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  FaArrowAltCircleDown,
  FaArrowDown,
  FaCheck,
  FaGithub,
  FaGoogle,
} from "react-icons/fa";

const SignInPage = () => {
  const router = useRouter();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();

    console.log(e.target.value);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const signIn = (e) => {
    e.preventDefault();
    // get email regex validation
    performLogin(e)
      .then((result) => {
        console.log(result);

        if (result) {
          router.push('/dashboard');
        }
      })
      .catch((e) => {
        setError({ ...data, password: "incorrect password or email" });
        setTimeout(() => {
          setError({...data, password: ""})
        }, 4000)
        console.error(e);
      });
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
                Sign in to your account
              </h2>
            </div>

            <div className="flex justify-center">
              <div className="text-center p-2 my-2 bg-blue-200 flex justify-center rounded-full hover:bg-red-400">
                <button
                  className="p-1 rounded-md flex"
                  onClick={() => login("github")}
                >
                  <FaGithub className="" />
                </button>
              </div>
            </div>

            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <p className="flex justify-center text-xs p-3 mt-4 font-medium items-center">
                Or sign in using{" "}
                <span className="px-1">
                  <FaArrowDown />
                </span>
              </p>
              <form className="space-y-3 p-3" onSubmit={(e) => signIn(e)}>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[0.7rem] mx-1 font-medium leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={data.email}
                      required
                      onChange={(e) => handleChange(e)}
                      className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block mx-1 text-[0.7rem] font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <div className="text-[0.6rem]">
                      <a
                        href="#"
                        className="font-semibold text-stone-600 hover:text-stone-800"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div className="mt-2">
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
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-blue-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign in
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

export default SignInPage;
