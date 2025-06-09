"use client";
import { logOut } from "@/action/auth";
import { User } from "@/types/user";
import { getInitial, getRoleName } from "@/utils/formats";
import { ClickAwayListener } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  LuChevronDown,
  LuChevronUp,
  LuLogOut,
  LuSettings,
  LuUserRound,
} from "react-icons/lu";

function UserHeader({ user }: { user: User }) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const options = [
    { label: "Profile", value: "profile", icon: <LuUserRound /> },
    { label: "Settings", value: "settings", icon: <LuSettings /> },
    { label: "Logout", value: "logout", icon: <LuLogOut /> },
  ];

  useEffect(() => {
    const main = document.getElementById("main-area");
    if (!main) return;

    const onScroll = () => {
      const currentScrollY = main.scrollTop;
      if (currentScrollY > lastScrollY && currentScrollY > 40)
        setShowHeader(false);
      else setShowHeader(true);
      setLastScrollY(currentScrollY);
    };

    main.addEventListener("scroll", onScroll);
    return () => main.removeEventListener("scroll", onScroll);
  }, []);

  const handleOptionClick = async (option: { value: string }) => {
    switch (option.value) {
      case "profile":
        // Handle profile click
        console.log("Profile clicked");
        break;
      case "settings":
        // Handle settings click
        console.log("Settings clicked");
        break;
      case "logout":
        await logOut();
        break;
      default:
        break;
    }
    setToggleMenu(false);
  };

  return (
    <div
      style={{ opacity: `${lastScrollY < 35 ? 1 - lastScrollY / 35 : 0}` }}
      className={`${
        !showHeader && "hidden"
      } relative flex flex-row gap-3 items-center h-10 px-4 transition-all duration-300`}
    >
      <div className="rounded-full w-10 h-10 bg-gray-900 flex items-center justify-center">
        <p className="text-white font-bold tracking-wider">
          {getInitial(user.name)}
        </p>
      </div>
      <div
        onClick={() => setToggleMenu(!toggleMenu)}
        className="flex flex-col gap-0 cursor-pointer justify-center h-full"
      >
        <h1 className="font-medium leading-none">{user.name}</h1>
        <p className="font-light text-sm">{getRoleName(user.role)}</p>
      </div>
      <div
        onClick={() => setToggleMenu(!toggleMenu)}
        className="cursor-pointer"
      >
        <LuChevronDown
          className={`${
            toggleMenu ? "rotate-180" : "rotate-0"
          } w-5 h-5 font-bold cursor-pointer transition-all duration-500`}
        />
      </div>
      {toggleMenu && (
        <ClickAwayListener onClickAway={() => setToggleMenu(false)}>
          <div className="select-none absolute z-10 top-12 right-4 w-40 bg-white rounded-lg shadow-lg flex flex-col py-1">
            {options.map((option) => (
              <div
                onClick={() => handleOptionClick(option)}
                key={option.value}
                className="flex items-center gap-2 p-3 hover:bg-gray-100 cursor-pointer transition-all duration-300 px-4"
              >
                {option.icon}
                <span className="text-sm font-medium">{option.label}</span>
              </div>
            ))}
          </div>
        </ClickAwayListener>
      )}
    </div>
  );
}

export default UserHeader;
