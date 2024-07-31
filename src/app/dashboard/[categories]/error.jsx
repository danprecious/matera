"use client";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <div>
      <h1 className="">OOPS!!!</h1>
      <p>An Error occured while displaying this page</p> 
      <Link className="text-sm" href="/dashboard"><button>Click here to go back to the dashbaord</button></Link>
    </div>
  );
};
