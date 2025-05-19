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

function WasteCollectionEfficiencyByArea() {
  const collectionEfficiencyData = [
    { name: "Urban Area A", efficiency: 92 },
    { name: "Urban Area B", efficiency: 88 },
    { name: "Suburban Area C", efficiency: 76 },
    { name: "Suburban Area D", efficiency: 72 },
    { name: "Rural Area E", efficiency: 65 },
    { name: "Rural Area F", efficiency: 58 },
  ];

  return (
    <CardWrapper>
      <h1 className="font-medium text-lg">
        Waste Collection Efficiency by Area
      </h1>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
          width={500}
          height={400}
          data={collectionEfficiencyData}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} />
          <Tooltip formatter={(value) => `${value}%`} />
          <Bar
            dataKey="efficiency"
            fill="hsl(var(--foreground-secondary))"
            name="Collection Efficiency"
          />
        </BarChart>
      </ResponsiveContainer>
    </CardWrapper>
  );
}

export default WasteCollectionEfficiencyByArea;
