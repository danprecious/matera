import { auth } from "@/auth"
import { redirect } from "next/navigation";

const AuthLayout = async ({children}) => {

    const session = await auth();

    if(session){
        redirect("/dashboard");
    }

  return (
    <div>{children}</div>
  )
}

export default AuthLayout