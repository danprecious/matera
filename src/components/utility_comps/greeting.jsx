import { auth } from "@/auth";

const Greeting = async () => {
  const session = await auth();

  return (
    <div className="md:p-5 my-2">
      <h1 className="md:text-[1.1rem] text-[1rem] font-mediu">
        Good Morning <span>{session?.user?.name ? `${session.user.name}` : ""}</span>
      </h1>
      <p className="md:text-[0.7rem] text-[12px] py-3">
        pick up a material today...
      </p>
    </div>
  );
};

export default Greeting;
