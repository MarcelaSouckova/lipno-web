// lib/auth.ts
import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId:     process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          scope:       "openid email profile https://www.googleapis.com/auth/calendar",
          prompt:      "consent",
          access_type: "offline",
        }
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET!,
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken  = account.access_token!;
        token.refreshToken = account.refresh_token!;
        token.expiresAt    = (account.expires_at ?? 0) * 1000;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.accessToken  = token.accessToken!;
      session.user.refreshToken = token.refreshToken!;
      session.user.expiresAt    = token.expiresAt!;
      return session;
    }
  }
};
