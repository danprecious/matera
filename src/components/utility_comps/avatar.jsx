"use server"

import Image from 'next/image';

import { auth } from '@/auth';


const Avatar = async () => {

  const session = await auth();


  return (
    <div className='w-[35px] h-[35px]  flex  items-center justify-center text-center bg-red-400 rounded-full border overflow-hidden'>
      {session?.user?.image ? <Image width={1000} height={1000} src={session.user.image} className='object-cover'/> : <p className=' text-white font-bold'>D</p>}
    </div>
  )
}

export default Avatar;
