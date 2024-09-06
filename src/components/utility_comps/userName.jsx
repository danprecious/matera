import { auth } from "@/auth";


const UserName = async () => {

    const session = await auth();

  return (
    <p className="text-secondary">
        {session?.user?.name ? <p>{session.user.name}</p> : "Error"}
    </p>
  )
}

export default UserName;