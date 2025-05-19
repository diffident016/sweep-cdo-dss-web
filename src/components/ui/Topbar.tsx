"use client";
import React, { useState } from "react";
import { LuPanelLeftClose } from "react-icons/lu";

function Topbar({
  isOpen,
  onPanelButton,
}: {
  isOpen: boolean;
  onPanelButton: VoidFunction;
}) {
  return (
    <div className="flex flex-row justify-between items-center py-4"></div>
  );
}

export default Topbar;
