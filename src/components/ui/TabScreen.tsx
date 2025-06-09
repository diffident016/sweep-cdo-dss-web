"use client";
import React, { useEffect, useState } from "react";
import Tab from "./Tab";
import { useSearchParams } from "next/navigation";

function TabScreen({
  tabs,
}: {
  tabs: { name: string; tab: string; page: React.ReactNode }[];
}) {
  const [tab, setTab] = useState(tabs[0].tab);
  const searchParams = useSearchParams();

  useEffect(() => {
    const params = Object.fromEntries(searchParams.entries());

    if (!params.tab) return;

    const index = tabs.findIndex((t) => t.tab === params.tab);
    if (index === -1) {
      setTab(tabs[0].tab);
      return;
    }
    setTab(params.tab as string);
  }, [searchParams]);

  return (
    <div className="w-full h-full flex flex-col gap-4 pb-4">
      <Tab tabs={tabs} active={tab} />
      {tabs[tab ? tabs.findIndex((t) => t.tab === tab) : 0].page}
    </div>
  );
}

export default TabScreen;
