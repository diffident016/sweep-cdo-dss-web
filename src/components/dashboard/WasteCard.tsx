"use client";
import React from "react";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material";
import { formatNumberWithCommas } from "@/utils/formats";

function WasteCard({
  item,
}: {
  item: { name: string; value: number; unit: string; progress: number };
}) {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 20,
    borderRadius: 10,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[200],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 10,
      backgroundColor: theme.palette.grey[900],
    },
  }));

  return (
    <div className="w-full min-w-[200px] h-[180px] flex flex-col rounded-md bg-gray-50 p-6 gap-4">
      <h1 className="font-medium text-lg">{item.name}</h1>
      <h1 className="font-bold text-3xl">
        {formatNumberWithCommas(item.value)}{" "}
        <span className="font-light text-base">{item.unit}</span>
      </h1>
      <div className="flex flex-row w-full">
        <div className="w-[80%]">
          <BorderLinearProgress variant="determinate" value={item.progress} />
        </div>
      </div>
    </div>
  );
}

export default WasteCard;
