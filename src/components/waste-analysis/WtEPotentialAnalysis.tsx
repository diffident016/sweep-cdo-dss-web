import React from "react";
import CardWrapper from "../ui/CardWrapper";
import Table from "../ui/Table";

function WtEPotentialAnalysis() {
  const headers = [
    "Waste Category",
    "Conversion Method",
    "Conversion Efficiency",
    "Energy Yield",
    "Requirements",
  ];

  const data = [
    {
      "Waste Category": "Organic",
      "Conversion Method": "Anaerobic Digestion",
      "Conversion Efficiency": "60-80%",
      "Energy Yield": "80-140 kWh/ton",
      Requirements: "Proper segregation, control of moisture content",
    },
    {
      "Waste Category": "Mixed MSW",
      "Conversion Method": "Incineration",
      "Conversion Efficiency": "65-85%",
      "Energy Yield": "500-600 kWh/ton",
      Requirements: "Pre-sorting, air pollution control",
    },
    {
      "Waste Category": "Processed RDF",
      "Conversion Method": "Gasification",
      "Conversion Efficiency": "70-90%",
      "Energy Yield": "600-900 kWh/ton",
      Requirements: "Waste pre-processing, syngas cleaning",
    },
    {
      "Waste Category": "Landfill",
      "Conversion Method": "Landfill Gas Recovery",
      "Conversion Efficiency": "40-60%",
      "Energy Yield": "50-90 kWh/ton",
      Requirements: "Proper landfill design, gas collection system",
    },
  ];

  return (
    <CardWrapper>
      <h1 className="font-medium text-lg">Waste Properties Analysis</h1>
      <Table headers={headers} data={data} />
    </CardWrapper>
  );
}

export default WtEPotentialAnalysis;
