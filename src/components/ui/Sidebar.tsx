"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { cloneElement, useEffect, useState } from "react";
import {
  LuLayoutDashboard,
  LuRecycle,
  LuGitCompareArrows,
  LuMapPinned,
  LuMap,
  LuListChecks,
  LuPanelLeftClose,
  LuPanelRightClose,
} from "react-icons/lu";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();
  const path = usePathname();
  const navigation = [
    {
      name: "Dashboard",
      to: "/dashboard",
      icon: <LuLayoutDashboard />,
    },
    {
      name: "Waste Analysis",
      to: "/dashboard/waste-analysis",
      icon: <LuRecycle />,
    },
    {
      name: "Technology Comparison",
      to: "/dashboard/technology-comparison",
      icon: <LuGitCompareArrows />,
    },
    {
      name: "Site Selection",
      to: "/dashboard/site-selection",
      icon: <LuMapPinned />,
    },
  ];

  const tools = [
    {
      name: "MCDA",
      to: "/dashboard/tools/mcda",
      icon: <LuListChecks />,
    },
  ];

  const sideBarItem = ({
    item,
  }: {
    item: { name: string; to: string; icon: React.JSX.Element };
  }) => {
    return (
      <li key={item.name} className="w-full relative h-9">
        <button
          disabled={path === item.to}
          onClick={() => router.push(item.to)}
          className={`${
            path === item.to
              ? `${isOpen && "bg-gray-900 text-background"} bg-gray-200`
              : `hover:bg-gray-200 ${isOpen && "text-foreground"}bg-background`
          } flex flex-row gap-2 items-center cursor-pointer font-medium w-full ${
            isOpen ? "p-2 rounded-md" : "p-0 py-2 justify-center"
          } transition duration-300 `}
        >
          {cloneElement(item.icon, { size: 22 })}
          {isOpen && item.name}
        </button>
        {path === item.to && !isOpen && (
          <div className="h-full right-0 top-0 absolute bg-gray-900 w-1"></div>
        )}
      </li>
    );
  };

  return (
    <div
      style={{ width: isOpen ? "280px" : "64px" }}
      className={`w-full h-full transition duration-800 bg-background rounded-tr-lg rounded-br-lg shadow-sm border-gray-200 border-l`}
    >
      <div
        className={`w-full h-full flex flex-col gap-2 ${
          isOpen ? "p-4" : "p-0 py-4 items-center"
        }`}
      >
        <div className="flex flex-row justify-between items-center py-2">
          {isOpen && <h1 className="text-2xl font-bold">SWEEP CDO</h1>}
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="transition duration-500 cursor-pointer"
          >
            {isOpen ? (
              <LuPanelLeftClose size={24} />
            ) : (
              <LuPanelRightClose size={24} />
            )}
          </button>
        </div>
        <ul className={`w-full flex flex-col mt-4 gap-3`}>
          {navigation.map((item) => sideBarItem({ item }))}
        </ul>
        {isOpen ? (
          <p className="font-medium pt-3">Tools</p>
        ) : (
          <hr className="w-1/2 mt-2" />
        )}
        <ul
          className={`w-full flex flex-col mt-2 ${isOpen ? "gap-2" : "gap-3"}`}
        >
          {tools.map((item) => sideBarItem({ item }))}
        </ul>
      </div>
    </div>
  );
}
export default Sidebar;
