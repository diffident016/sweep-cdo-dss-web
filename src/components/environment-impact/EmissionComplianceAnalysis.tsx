"use client";
import React from "react";
import CardWrapper from "../ui/CardWrapper";
import Table from "../ui/Table";

function EmissionComplianceAnalysis() {
  const headers = [
    "Pollutant",
    "Regulatory Limit",
    "Gasification",
    "Anaerobic Digestion",
    "Incineration",
    "Status",
  ];

  const data = [
    {
      Pollutant: "CO₂ (kg/ton)",
      "Regulatory Limit": "500",
      Gasification: "250",
      "Anaerobic Digestion": "180",
      Incineration: "450",
      Status: "Compliant",
    },
    {
      Pollutant: "NOₓ (kg/ton)",
      "Regulatory Limit": "1.0",
      Gasification: "0.4",
      "Anaerobic Digestion": "0.2",
      Incineration: "0.8",
      Status: "Compliant",
    },
    {
      Pollutant: "SO₂ (kg/ton)",
      "Regulatory Limit": "0.2",
      Gasification: "0.05",
      "Anaerobic Digestion": "0.02",
      Incineration: "0.15",
      Status: "Compliant",
    },
    {
      Pollutant: "Particulates (g/ton)",
      "Regulatory Limit": "30",
      Gasification: "15",
      "Anaerobic Digestion": "5",
      Incineration: "25",
      Status: "Compliant",
    },
    {
      Pollutant: "Dioxins (ng/ton)",
      "Regulatory Limit": "0.1",
      Gasification: "0.025",
      "Anaerobic Digestion": "0.005",
      Incineration: "0.08",
      Status: "Compliant",
    },
  ];

  return (
    <CardWrapper>
      <h1 className="font-medium text-lg">Emissions Compliance Analysis</h1>
      <Table headers={headers} data={data} />
    </CardWrapper>
  );
}

export default EmissionComplianceAnalysis;
