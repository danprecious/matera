import Link from "next/link";
import FormContextProvider from "./_state/context";

const OnboardingLayout = ({ children }) => {
  return (
    <FormContextProvider>
      <div className="h-[100vh] flex flex-col  items-center justify-center">
        <div className=" md:w-[60%] bg-whi  p-10 flex flex-col text-center relative">
          <div className="my-3">
            <h1 className="md:text-[2.5rem] text-[1.5rem] font-black py-3 text-primary">
              Welcome to Matera
            </h1>
            <span className="text-sm">
              ...Get access to old and new class materials including
              past-questions and handouts.
            </span>
          </div>

          <div>{children}</div>

          <div className="md:flex-row lg:justify-center flex flex-col w-[100%] mt-5 md:px-20 items-center">
            <div className="w-[4em] flex justify-around">
              <div className="bg-stone-500 w-[10px] h-[10px] rounded-full"></div>
              <div className="bg-stone-500 w-[10px] h-[10px] rounded-full"></div>
              <div className="bg-stone-500 w-[10px] h-[10px] rounded-full"></div>
            </div>
            <div className="mt-7 md:mt-0">
                {/* <Link href="/dashboard" className="py-2 px-6 border">Skip</Link> */}
            </div>
          </div>
        </div>
      </div>
    </FormContextProvider>
  );
};

export default OnboardingLayout;
