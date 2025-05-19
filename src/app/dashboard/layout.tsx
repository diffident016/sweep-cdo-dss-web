import React, { Suspense } from "react";
import Sidebar from "@/components/ui/Sidebar";
import Loading from "./loading";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-screen flex flex-row font-[family-name:var(--font-geist-sans)] selection:bg-blue-200 selection:text-[var(--accent)] overflow-hidden">
      <Sidebar />
      <div style={{ flex: 1, overflow: "auto" }} className="w-full h-full">
        <div className="w-full h-full py-6 px-8">
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </div>
      </div>
    </div>
  );
}
