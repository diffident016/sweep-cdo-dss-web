import React from "react";
import CardWrapper from "../ui/CardWrapper";

function FinancialReportCard() {
  const data = [
    {
      name: "Annual Revenue",
      value: "$5,606,400",
    },
    {
      name: "Annual Operational Cost",
      value: "$3,260,000",
    },
    {
      name: "Annual Profit",
      value: "$2,346,400",
    },
    { name: "Energy Generated", value: "46,720 MWh/year" },
    { name: "Carbon Reduction", value: "28,032 tCO₂e/year" },
    { name: "Cost per Ton", value: "$45/ton" },
  ];

  return (
    <CardWrapper>
      <h1 className="font-medium text-lg">Financial Results</h1>
      <div className="w-full flex flex-col gap-4 py-4">
        <div className="w-full flex flex-col text-lg items-center gap-1">
          <h1 className="font-medium text-2xl">$1,962,698.923</h1>
          <p className="font-medium text-base text-gray-500">
            Net Present Value
          </p>
        </div>
        <div className="flex flex-row justify-between py-4">
          <div className="w-full flex flex-col text-lg items-center gap-1">
            <h1 className="font-medium text-2xl">6.0%</h1>
            <p className="font-medium text-base text-gray-500">
              Internal Rate of Return
            </p>
          </div>
          <div className="w-full flex flex-col text-lg items-center gap-1">
            <h1 className="font-medium text-2xl">10.7 years</h1>
            <p className="font-medium text-base text-gray-500">
              Simple Payback Period
            </p>
          </div>
        </div>
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
      </div>
    </CardWrapper>
  );
}

export default FinancialReportCard;
