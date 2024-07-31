import Link from "next/link";
import React from "react";

const FullName = () => {
  return (
    <div className="my-8 w-[100%]">
      <p className="text-sm py-3">
        For a personalized experience, Let's get to know you
      </p>
      <div className="md:flex justify-center">
        <div className="mx-2 my-6 md:my-2">
          <input
            type="text"
            name="firstname"
            placeholder="First name"
            className="rounded-md w-[100%] text-sm p-2 border"
          />
        </div>
        <div className="mx-2 my-6 md:my-2">
          <input
            type="text"
            name="lastname"
            placeholder="Last name"
            className="rounded-md w-[100%] text-sm p-2 border"
          />
        </div>
      </div>
      <div className="flex  mt-10 justify-around items-center">
        <div className="flex justify-end mx-2 opacity-20  py-2 px-6 border">
          {/* <button>Prev</button> */}
        </div>
        <div className="flex justify-end mx-2  py-2 px-6 border rounded-md">
          <Link href="/onboarding/interests">Next</Link>
        </div>
      </div>
    </div>
  );
};

export default FullName;
