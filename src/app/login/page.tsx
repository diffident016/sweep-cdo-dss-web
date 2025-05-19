import Button from "@/components/ui/Button";
import LoginForm from "@/components/auth/LoginForm";
import React from "react";

function Login() {
  return (
    <div className="w-full h-screen flex flex-row items-center justify-center p-4 font-[family-name:var(--font-geist-sans)]">
      <div className="max-w-md w-full flex flex-col gap-2 items-center justify-center p-8 bg-background rounded-lg shadow-lg border-gray-200 border">
        <h1 className="text-3xl font-black">SWEEP CDO DSS</h1>
        <h1 className="text-base font-medium">
          Enter your credentials to access the dashboard
        </h1>
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
