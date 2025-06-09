"use server";
import { getToken } from "next-auth/jwt";
import { cookies } from "next/headers";
import { generateToken } from "@/lib/jwt";

export async function getAuthToken() {
  const cookie = await cookies();
  const token = await getToken({
    req: { headers: { cookie: cookie.toString() } },
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (token) {
    return generateToken(token);
  }

  return null;
}
