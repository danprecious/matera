import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import prisma from "@/app/libs/prismadb";
import { getUserByEmail } from "./utils/users";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  providers: [
    Github({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
          if (credentials === null) return null;  
        try {
          const user = getUserByEmail(credentials?.email)
          if (user) {
            const isMatch = user?.password === credentials?.password;
            if(isMatch) {
              return user;
            }
            else {
              throw new Error("incorrect password");
            }
          }
          else {
            throw new Error('user not found'); 
          }

          } catch (error) {
            throw new Error("Server error")
          }
      }
    }),
  ],
});
