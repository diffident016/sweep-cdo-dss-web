import React from "react";
import CardWrapper from "../ui/CardWrapper";
import Table from "../ui/Table";

function WastePropertiesAnalysis() {
  const headers = [
    "Waste Component",
    "Moisture Content (%)",
    "Volatile Matter (%)",
    "Fixed Carbon (%)",
    "Ash Content (%)",
    "Calorific Value (MJ/kg)",
  ];

  const data = [
    {
      "Waste Component": "Food Waste",
      "Moisture Content (%)": "70-80",
      "Volatile Matter (%)": "15-25",
      "Fixed Carbon (%)": "2-5",
      "Ash Content (%)": "5-10",
      "Calorific Value (MJ/kg)": "3-6",
    },
    {
      "Waste Component": "Paper",
      "Moisture Content (%)": "6-10",
      "Volatile Matter (%)": "75-85",
      "Fixed Carbon (%)": "8-10",
      "Ash Content (%)": "5-10",
      "Calorific Value (MJ/kg)": "12-18",
    },
    {
      "Waste Component": "Plastics",
      "Moisture Content (%)": "1-4",
      "Volatile Matter (%)": "90-98",
      "Fixed Carbon (%)": "1-2",
      "Ash Content (%)": "1-5",
      "Calorific Value (MJ/kg)": "30-40",
    },
    {
      "Waste Component": "Textiles",
      "Moisture Content (%)": "10-15",
      "Volatile Matter (%)": "65-75",
      "Fixed Carbon (%)": "10-12",
      "Ash Content (%)": "5-8",
      "Calorific Value (MJ/kg)": "15-19",
    },
    {
      "Waste Component": "Yard Waste",
      "Moisture Content (%)": "30-60",
      "Volatile Matter (%)": "30-55",
      "Fixed Carbon (%)": "5-10",
      "Ash Content (%)": "5-10",
      "Calorific Value (MJ/kg)": "5-8",
    },
  ];

  return (
    <CardWrapper>
      <h1 className="font-medium text-lg">Waste Properties Analysis</h1>
      <Table headers={headers} data={data} />
    </CardWrapper>
  );
}

export default WastePropertiesAnalysis;
