import React from "react";

function CardWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full min-h-[400px] flex flex-col rounded-md bg-gray-50 p-6 gap-4 select-none">
      {children}
    </div>
  );
}

export default CardWrapper;
