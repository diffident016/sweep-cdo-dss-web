"use client";
import React from "react";
import { styled } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import CardWrapper from "../ui/CardWrapper";

function ProcessingEfficiency() {
  const data = [
    {
      name: "Recycling Rate",
      value: 0.72,
      unit: "kgCO2/kWh",
    },
    {
      name: "Energy Recovery",
      value: 0.85,
      unit: "kgCO2/kWh",
    },
    {
      name: "Landfill Diversion",
      value: 0.63,
      unit: "kgCO2/kWh",
    },
  ];

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[200],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.grey[900],
    },
  }));
  return (
    <CardWrapper>
      <h1 className="font-medium text-lg">Processing Efficiency</h1>
      <div className="flex flex-col gap-4 mt-4">
        {data.map((item) => (
          <div className="flex flex-col py-2">
            <h1 className="font-medium text-base">{item.name}</h1>
            <div className="flex flex-row gap-4 items-center">
              <BorderLinearProgress
                variant="determinate"
                value={item.value * 100}
                className="w-full"
              />
              <p>{item.value * 100}%</p>
            </div>
          </div>
        ))}
      </div>
    </CardWrapper>
  );
}

export default ProcessingEfficiency;
