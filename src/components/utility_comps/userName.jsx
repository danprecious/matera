import { auth } from "@/auth";


const UserName = async () => {

    const session = await auth();

  return (
    <div>
        {session?.user?.name ? <p>{session.user.name}</p> : "Error"}
    </div>
  )
}

export default UserName;