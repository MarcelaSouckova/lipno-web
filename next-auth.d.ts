// next-auth.d.ts
import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import { JWT as NextAuthJWT }         from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: DefaultSession["user"] & {
      accessToken:  string;
      refreshToken: string;
      expiresAt:    number;
    };
  }
  interface User extends DefaultUser {
    accessToken:  string;
    refreshToken: string;
    expiresAt:    number;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends NextAuthJWT {
    accessToken:  string;
    refreshToken: string;
    expiresAt:    number;
  }
}
