"use client";
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

function ProjectedEnergyGeneration() {
  const data = [
    { name: "Anaerobic Digestion", value: 28000 },
    { name: "Incineration", value: 114000 },
    { name: "Gasification", value: 145000 },
    { name: "Landfill Gas", value: 21000 },
  ];

  return (
    <CardWrapper>
      <h1 className="font-medium text-lg">Projected Energy Generation</h1>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
            formatter={(value) => `${value.toLocaleString()} MWh/year`}
          />
          <Bar
            dataKey="value"
            fill="hsl(var(--primary))"
            name="Annual Energy Generation"
          />
        </BarChart>
      </ResponsiveContainer>
    </CardWrapper>
  );
}

export default ProjectedEnergyGeneration;
