import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client/extension";
import NextAuth from "next-auth";
import credentials from "next-auth/providers/credentials";
import Credentials from "next-auth/providers/credentials";
import facebook from "next-auth/providers/facebook";
import github from "next-auth/providers/github";
import google from "next-auth/providers/google";
// import { saltAndHashPassword } from "@/utils/password"

// const prisma = new PrismaClient();

export const { handlers, signIn, signOut, auth } = NextAuth({
  // adapter: PrismaAdapter(prisma),
  providers: [google, facebook],
});
