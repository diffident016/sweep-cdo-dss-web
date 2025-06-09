"use client";
import React from "react";
import CardWrapper from "../ui/CardWrapper";

function SimulationResultsCard() {
  const data = [
    {
      name: "Energy Output",
      value: "28000 MWh/year",
    },
    {
      name: "Carbon Reduction",
      value: "15000 tCO₂e/year",
    },
    {
      name: "Operational Cost",
      value: "$11,200/year",
    },
    {
      name: "Landfill Diversion",
      value: "98000 tons/year",
    },
    {
      name: "Estimated Revenue",
      value: "$20,500/year",
    },
  ];

  return (
    <CardWrapper>
      <h1 className="font-medium text-lg">Simulation Results</h1>
      <div className="flex flex-col gap-4 mt-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-row justify-between items-center"
          >
            <h1 className="">{item.name}</h1>
            <p className="font-medium">{item.value}</p>
          </div>
        ))}
      </div>
    </CardWrapper>
  );
}

export default SimulationResultsCard;
