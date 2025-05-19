import React from "react";
import CardWrapper from "../ui/CardWrapper";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function CalorificValue() {
  const calorificValueData = [
    { name: "Paper", value: 16.8 },
    { name: "Textiles", value: 17.5 },
    { name: "Plastics", value: 32.6 },
    { name: "Food waste", value: 4.2 },
    { name: "Yard waste", value: 6.5 },
    { name: "Wood", value: 18.6 },
    { name: "Mixed MSW", value: 10.5 },
  ];

  return (
    <CardWrapper>
      <h1 className="font-medium text-lg">Calorific Value by Waste Type</h1>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={calorificValueData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis
            label={{ value: "MJ/kg", angle: -90, position: "insideLeft" }}
          />
          <Tooltip
            formatter={(value) => [`${value} MJ/kg`, "Calorific Value"]}
          />
          <Bar dataKey="value" fill="var(--foreground-secondary)" />
        </BarChart>
      </ResponsiveContainer>
    </CardWrapper>
  );
}

export default CalorificValue;
