import PageHeader from "@/components/ui/PageHeader";
import React from "react";

function TechnologyComparison() {
  const header = {
    title: "Technology Comparison",
    subtitle:
      "Compare different waste-to-energy technologies based on efficiency, cost, and environmental impact",
  };

  return (
    <div className="w-full h-full flex flex-col gap-4 overflow-auto">
      <PageHeader title={header.title} subtitle={header.subtitle} />
    </div>
  );
}

export default TechnologyComparison;
