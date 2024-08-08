import NextAuth from "next-auth";
import type { NextAuthConfig } from "next-auth";
// import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./app/lib/prisma";
import next from "next";
import { url } from "inspector";

const authConfig = {
  pages: {
    signIn: "/login",
  },
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET,
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
      const isOnLoginPage = nextUrl.pathname.startsWith("/login");
      const isOnHomePage = nextUrl.pathname === "/";

      if (isLoggedIn && isOnHomePage) return Response.redirect(new URL("/dashboard", nextUrl));
      if (isLoggedIn && isOnLoginPage) return Response.redirect(new URL("/dashboard", nextUrl));
      if (!isLoggedIn && isOnDashboard) return Response.redirect(new URL("/login", nextUrl));

      return true;
    },
    async jwt({ token, user }) {
      if (user) token.id = user.id;
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      return session;
    },
  },
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
} satisfies NextAuthConfig;

export const { handlers, signIn, signOut, auth } = NextAuth(authConfig);
