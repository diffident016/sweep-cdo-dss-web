import PageHeader from "@/components/ui/PageHeader";
import React from "react";
import { GiChemicalBolt } from "react-icons/gi";
import { FaBacteria, FaFire } from "react-icons/fa";
import TechnologyCard from "@/components/technology-comparison/TechnologyCard";

function TechnologyComparison() {
  const header = {
    title: "Technology Comparison",
    subtitle:
      "Compare different waste-to-energy technologies based on efficiency, cost, and environmental impact",
  };

  const technologies = [
    {
      name: "Gasification",
      description: "High temperature thermal conversion of waste into syngas.",
      icon: <GiChemicalBolt />,
      energy: "600-900",
      emissions: "65-85",
      cost: "High",
    },
    {
      name: "Anaerobic Digestion",
      description: "Biological process converting organic waste to biogas.",
      icon: <FaBacteria />,
      energy: "250-400",
      emissions: "60-80",
      cost: "Medium",
    },
    {
      name: "Thermal Combustion",
      description: "Direct burning of waste to generate heat and power.",
      icon: <FaFire />,
      energy: "500-700",
      emissions: "50-70",
      cost: "Low",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col gap-4 overflow-auto">
      <PageHeader title={header.title} subtitle={header.subtitle} />
      <div className="flex flex-row gap-4">
        {technologies.map((technology) => (
          <TechnologyCard key={technology.name} technology={technology} />
        ))}
      </div>
    </div>
  );
}

export default TechnologyComparison;
