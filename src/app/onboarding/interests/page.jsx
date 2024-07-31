import Link from "next/link";

const InterestBoard = () => {
  const interests = [
    {
      icon: "",
      name: ""
    }
];

  return (
    <div className=" lg:mx-12">
      <div className="py-5">
        <p className="text-sm text-left px-4 font-medium">
          Pick categories you'd love to see
        </p>
      </div>
      <div className="interest-grid py-3 max-h-[15em] overflow-y-scroll px-3">
        <div className="rounded-lg w-[8em] h-[6em] bg-red-200"></div>
        <div className="rounded-lg w-[8em] h-[6em] bg-red-200"></div>
        <div className="rounded-lg w-[8em] h-[6em] bg-red-200"></div>
        <div className="rounded-lg w-[8em] h-[6em] bg-red-200"></div>
        <div className="rounded-lg w-[8em] h-[6em] bg-red-200"></div>
        <div className="rounded-lg w-[8em] h-[6em] bg-red-200"></div>
        <div className="rounded-lg w-[8em] h-[6em] bg-red-200"></div>
      </div>
      <div className="flex  mt-10 justify-around items-center">
        <div className="flex justify-end mx-2 opacity-20  py-2 px-6 border">
          <Link href="/onboarding">Prev</Link>
        </div>
        <div className="flex justify-end mx-2  py-2 px-6 border rounded-md">
          <Link href="/dashboard">Next</Link>
        </div>
      </div>
    </div>
  );
};

export default InterestBoard;
