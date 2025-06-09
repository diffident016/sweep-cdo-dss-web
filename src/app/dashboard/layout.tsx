import React, { Suspense } from "react";
import Sidebar from "@/components/ui/Sidebar";
import Loading from "./loading";
import UserHeader from "@/components/ui/UserHeader";
import { auth } from "@/auth";
import { User } from "@/types/user";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userSession = await auth();
  return (
    <div className="relative w-full h-screen flex flex-row font-[family-name:var(--font-geist-sans)] selection:bg-blue-200 selection:text-[var(--accent)] overflow-hidden">
      <Sidebar />
      <div className="absolute right-8 top-8">
        <UserHeader user={userSession?.user as User} />
      </div>
      <div
        id="main-area"
        style={{ flex: 1, overflow: "auto" }}
        className="w-full h-full"
      >
        <div className="w-full h-full py-6 px-8">
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </div>
      </div>
    </div>
  );
}
