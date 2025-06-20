"use client";
import { SidebarItems } from "@/data/constants";
import { SidebarItem } from "@/types/sidebar";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { IconType } from "react-icons/lib";
import {
  LuListChecks,
  LuPanelLeftClose,
  LuPanelRightClose,
} from "react-icons/lu";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();
  const path = usePathname();
  const navigation = SidebarItems;

  const tools = [
    {
      name: "MCDA",
      to: "/dashboard/tools/mcda",
      icon: <LuListChecks />,
    },
  ];

  const SidebarIcon = ({ Icon }: { Icon: IconType }) => {
    return <Icon size={22} />;
  };

  const sideBarItem = ({ item }: { item: SidebarItem }) => {
    return (
      <li key={item.name} className="w-full relative h-9">
        <button
          disabled={path === item.to}
          onClick={() => router.push(item.to)}
          className={`${
            path === item.to
              ? `${isOpen && "bg-primary text-background"} bg-gray-200`
              : `hover:bg-gray-200 ${isOpen && "text-foreground"} bg-background`
          } flex flex-row gap-2 items-center cursor-pointer font-medium w-full ${
            isOpen ? "p-2 rounded-md" : "p-0 py-2 justify-center"
          } transition duration-300 `}
        >
          <SidebarIcon Icon={item.icon} />
          {isOpen && item.name}
        </button>
        {path === item.to && !isOpen && (
          <div className="h-full right-0 top-0 absolute bg-primary w-1"></div>
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
        <div className="overflow-auto h-full">
          <ul className={`w-full flex flex-col mt-4 gap-3`}>
            {navigation.map((item) => sideBarItem({ item }))}
          </ul>
          {/* {isOpen ? (
            <p className="font-medium pt-3">Tools</p>
          ) : (
            <hr className="w-1/2 mt-2" />
          )} <ul
            className={`w-full flex flex-col mt-2 ${
              isOpen ? "gap-2" : "gap-3"
            }`}
          >
            {tools.map((item) => sideBarItem({ item }))}
          </ul> */}
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
