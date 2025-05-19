import CollectionTrend from "@/components/dashboard/CollectionTrend";
import ProcessingEfficiency from "@/components/dashboard/ProcessingEfficiency";
import WasteCard from "@/components/dashboard/WasteCard";
import PageHeader from "@/components/ui/PageHeader";
import React from "react";

function page() {
  const cardData = [
    {
      name: "Total Waste",
      value: 211100,
      unit: "tons/day",
      progress: 50,
    },
    {
      name: "CO₂ Emissions",
      value: 79000,
      unit: "tons/year",
      progress: 70,
    },
    {
      name: "Energy Potential",
      value: 114,
      unit: "GWh/year",
      progress: 30,
    },
  ];

  const header = {
    title: "Waste Management Dashboard",
    subtitle:
      "Monitor key waste management and energy metrics for Cagayan de Oro City",
  };

  return (
    <div className="w-full h-full flex flex-col gap-4">
      <PageHeader title={header.title} subtitle={header.subtitle} />
      <div className="flex flex-row gap-4 mt-2">
        {cardData.map((item) => (
          <WasteCard item={item} />
        ))}
      </div>
      <div className="flex flex-row w-full h-full gap-4">
        <CollectionTrend />
        <ProcessingEfficiency />
      </div>
    </div>
  );
}

export default page;
