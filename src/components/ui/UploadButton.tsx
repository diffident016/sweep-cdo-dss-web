"use client";
import { SidebarItems } from "@/data/constants";
import { SidebarItem } from "@/types/sidebar";
import { ClickAwayListener } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { IconType } from "react-icons/lib";
import { LuUpload } from "react-icons/lu";

function UploadButton({
  onUpload,
  uploading,
}: {
  onUpload: (module: string) => void;
  uploading: boolean;
}) {
  const [isUploading, setIsUploading] = useState(uploading);
  const inputRef = useRef<HTMLInputElement>(null);
  const [toggleMenu, setToggleMenu] = useState(false);

  const options = SidebarItems.filter(
    (item: SidebarItem) =>
      ![
        "Data Management",
        "Dashboard",
        "Technology Comparison",
        "Financial Analysis",
        "Multi-Criteria Analysis",
      ].includes(item.name)
  );

  useEffect(() => {
    setIsUploading(uploading);
    console.log("Upload state changed:", uploading);
  }, [uploading]);

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;
    event.target.value = "";

    //onUpload(file);
  };

  const SidebarIcon = ({ Icon }: { Icon: IconType }) => {
    return <Icon size={18} />;
  };

  return (
    <button
      disabled={isUploading}
      //  onClick={() => inputRef.current?.click()}
      onClick={() => {
        setToggleMenu(!toggleMenu);
      }}
      className={`relative ${
        isUploading ? "opacity-60" : "opacity-100"
      } flex flex-row items-center justify-center rounded-md bg-[var(--primary)] text-white h-11 px-7 cursor-pointer`}
    >
      <label className="flex items-center gap-2 cursor-pointer">
        <LuUpload size={18} />
        <span className="hidden md:block">
          {isUploading ? "Uploading..." : "Upload File"}
        </span>
      </label>
      <input
        type="file"
        id="upload"
        className="hidden"
        accept=".csv, .xlsx"
        disabled={isUploading}
        onChange={handleFileUpload}
        ref={inputRef}
      />
      {toggleMenu && (
        <ClickAwayListener onClickAway={() => setToggleMenu(false)}>
          <div className="select-none absolute z-10 top-14 right-6 w-60 text-[var(--primary)] bg-white rounded-lg shadow-lg flex flex-col py-1">
            <h1 className="text-start font-bold py-2 px-4">Choose a module:</h1>
            {options.map((option) => (
              <div
                onClick={() => {
                  setToggleMenu(false);
                  onUpload(option.name);
                }}
                key={option.name}
                className="flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer transition-all duration-300 px-4"
              >
                <SidebarIcon Icon={option.icon} />
                <span className="text-base font-medium">{option.name}</span>
              </div>
            ))}
          </div>
        </ClickAwayListener>
      )}
    </button>
  );
}

export default UploadButton;
