import React, { cloneElement } from "react";
import CardWrapper from "../ui/CardWrapper";

function TechnologyCard({
  technology,
}: {
  technology: {
    name: string;
    description: string;
    icon: React.JSX.Element;
    energy: string;
    emissions: string;
    cost: string;
  };
}) {
  const { name, description, icon, energy, emissions, cost } = technology;
  return (
    <div className="w-full h-full min-h-[250px] flex flex-col rounded-md bg-gray-50 p-6 gap-4 select-none cursor-pointer hover:shadow-sm transition duration-300">
      <div className="flex flex-row justify-between">
        <h1 className="font-medium text-lg">{name}</h1>
        {cloneElement(icon, { size: 22 })}
      </div>
      <div className="flex flex-col gap-2">
        <p className="pt-2 h-14">{description}</p>
        <div className="flex flex-row justify-between pt-4">
          <p>Energy Output:</p>
          <p className="font-medium">{energy} kWh/ton</p>
        </div>
        <div className="flex flex-row justify-between">
          <p>CO₂ Reduction:</p>
          <p className="font-medium">{emissions}%</p>
        </div>
        <div className="flex flex-row justify-between">
          <p>CAPEX:</p>
          <p className="font-medium">{cost}</p>
        </div>
      </div>
    </div>
  );
}

export default TechnologyCard;
