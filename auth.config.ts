import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");

      if (isLoggedIn) {
        // If user is logged in and not on dashboard, redirect to dashboard
        return (
          isOnDashboard || Response.redirect(new URL("/dashboard", nextUrl))
        );
      } else if (isOnDashboard) {
        // If user is not logged in and trying to access dashboard, redirect to sign-in
        return Response.redirect(new URL("/dashboard", nextUrl));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
