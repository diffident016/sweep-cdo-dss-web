import { z, date, number, object, string, boolean } from "zod";

export const LoginSchema = object({
  email: string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  password: string({ required_error: "Password is required" }).min(
    1,
    "Password is required"
  ),
});

export const UserSchema = object({
  name: string().min(1, "Name is required"),
  email: string().email("Invalid email"),
  role: string().min(1, "Role is required"),
});
