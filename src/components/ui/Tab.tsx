"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function Tab({
  tabs,
  active,
}: {
  tabs: { name: string; tab: string }[];
  active?: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<string | undefined>(active);

  useEffect(() => {
    setActiveTab(active);
  }, [active]);

  const handleTabClick = (tab: string) => {
    router.push(pathname + `?tab=${tab}`);
  };

  return (
    <div className="w-full h-12 bg-[var(--background-secondary)] rounded-lg border border-gray-200 shadow-sm select-none">
      <div className="w-full h-full min-h-12  flex flex-row gap-4 p-1">
        {tabs.map((tab) => (
          <div
            key={tab.name}
            className={`transition duration-300 w-full flex items-center justify-center text-sm font-medium cursor-pointer rounded-md ${
              activeTab === tab.tab ? "bg-primary text-background" : ""
            }`}
            onClick={() => handleTabClick(tab.tab)}
          >
            {tab.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tab;
