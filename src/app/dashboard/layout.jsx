import SideBar from "@/components/nav/sideBar";
import Header from "@/components/nav";
import RightSidebar from "@/components/layouts/right-sidebar";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import UploadForm from "@/components/upload/form";


export default async function DashbaordLayout({ children }) {


  // const session = await auth();

  // if(!session?.user) {
  //   redirect("/sign_up");
  // }

  return (
    <main className="flex w-screen">
      <UploadForm />
      <SideBar />
      <div className="lg:w-[80%] w-[100%]">
        <div className="sticky top-0">
          <Header />
        </div>
        <div className="w-[100%] h-[90vh] flex">
          <div className=" lg:w-[77%] w-[100%]  overflow-scroll border-l  border-bgShade">
            {children}
          </div>
          <RightSidebar />
        </div>
      </div>
    </main>
  );
}
