import { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { prisma } from "../../../lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";

async function saveSession(sessionToken: string, userId: any) {
  // Use Prisma to create or update a session record in the database
  const session = await prisma.session.create({
    data: {
      sessionToken,
      id: uuidv4(),
      expires: new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString(),
      userId,
    },
  });

  return session;
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "your username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any, req: any) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        if (!email || !password) return null;
        const user = await prisma.user.findUnique({
          where: {
            email,
          },
        });
        if (!user) return null;
        const passwordMatch = await bcrypt.compare(password, user?.hashedPassword!);

        if (!passwordMatch) return null;

        await saveSession(req.body.csrfToken, user.id);
        return user;
      },
    }),
    // ...add more providers here
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXT_PUBLIC_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  // callbacks: {
  //   jwt(params) {
  //     // update token
  //     if (params.user?.role) {
  //       params.token.role = params.user.role;
  //     }
  //     // return final_token
  //     return params.token;
  //   },
  // },
};

export default NextAuth(authOptions);
