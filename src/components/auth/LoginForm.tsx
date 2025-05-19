"use client";
import React, { useState } from "react";
import Button from "../ui/Button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { LoginSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { login } from "@/action/auth";
import Input from "../ui/Input";

function LoginForm() {
  const [serverError, setServerError] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof LoginSchema>) {
    setServerError(null);
    setIsLoggingIn(true);

    login(data)
      .then((result) => {
        if (result?.error) {
          setServerError(result.error || "Invalid login credentials");
        }

        setIsLoggingIn(false);
      })
      .catch((err) => {
        setServerError(err.message || "Invalid login credentials");
        setIsLoggingIn(false);
      });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col px-4 mt-4 w-full"
    >
      <Input
        label="Email"
        type="email"
        placeholder="name@email.com"
        register={register("email")}
        error={errors.email}
      />
      <Input
        label="Password"
        type="password"
        register={register("password")}
        error={errors.password}
      />
      <div className="flex justify-end w-full py-4">
        <a className="text-foreground/90 hover:underline cursor-pointer">
          Forgot Password?
        </a>
      </div>
      <Button
        color="foreground"
        text="Log In"
        loadingMessage="Logging in..."
        type="submit"
        isLoading={isLoggingIn}
      />
      {/* <p className="text-center text-foreground py-4">
        Don't have an account?{" "}
        <button className="h-auto p-0 font-bold hover:underline cursor-pointer">
          Sign up
        </button>
      </p> */}
      {serverError && (
        <p style={{ color: "red", paddingTop: "16px" }}>{serverError}</p>
      )}
    </form>
  );
}

export default LoginForm;
