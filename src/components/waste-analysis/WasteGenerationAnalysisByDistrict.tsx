import React from "react";
import CardWrapper from "../ui/CardWrapper";
import Table from "../ui/Table";

function WasteGenerationAnalysisByDistrict() {
  const headers = [
    "District",
    "Population",
    "Daily Generation (tons)",
    "Per Capita (kg/day)",
    "Collection Rate (%)",
  ];

  const data = [
    {
      District: "District 1",
      Population: "85,420",
      "Daily Generation (tons)": "96.5",
      "Per Capita (kg/day)": "1.13",
      "Collection Rate (%)": "92",
    },
    {
      District: "District 2",
      Population: "102,350",
      "Daily Generation (tons)": "112.6",
      "Per Capita (kg/day)": "1.10",
      "Collection Rate (%)": "88",
    },
    {
      District: "District 3",
      Population: "91,700",
      "Daily Generation (tons)": "95.4",
      "Per Capita (kg/day)": "1.04",
      "Collection Rate (%)": "85",
    },
    {
      District: "District 4",
      Population: "78,350",
      "Daily Generation (tons)": "72.1",
      "Per Capita (kg/day)": "0.92",
      "Collection Rate (%)": "78",
    },
    {
      District: "District 5",
      Population: "95,120",
      "Daily Generation (tons)": "102.7",
      "Per Capita (kg/day)": "1.08",
      "Collection Rate (%)": "83",
    },
  ];

  return (
    <CardWrapper>
      <h1 className="font-medium text-lg">Waste Properties Analysis</h1>
      <Table headers={headers} data={data} />
    </CardWrapper>
  );
}

export default WasteGenerationAnalysisByDistrict;
