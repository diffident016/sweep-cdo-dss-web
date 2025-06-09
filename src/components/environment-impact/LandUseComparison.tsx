"use client";
import React from "react";
import CardWrapper from "../ui/CardWrapper";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function LandUseComparison() {
  const data = [
    {
      name: "Current Landfill",
      area: 45,
      capacity: 400,
      remaining: 5,
      leachate: "High",
      methane: "High",
    },
    {
      name: "Gasification",
      area: 12,
      capacity: 300,
      remaining: "N/A",
      leachate: "Low",
      methane: "None",
    },
    {
      name: "Anaerobic Digestion",
      area: 15,
      capacity: 180,
      remaining: "N/A",
      leachate: "Medium",
      methane: "Captured",
    },
    {
      name: "Incineration",
      area: 10,
      capacity: 350,
      remaining: "N/A",
      leachate: "Low",
      methane: "None",
    },
  ];

  return (
    <CardWrapper>
      <h1 className="font-medium text-lg">Land Use Comparison</h1>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis
            label={{ value: "Hectares", angle: -90, position: "insideLeft" }}
          />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="area"
            name="Land Area Required (ha)"
            fill="hsl(var(--primary))"
          />
        </BarChart>
      </ResponsiveContainer>
    </CardWrapper>
  );
}

export default LandUseComparison;
