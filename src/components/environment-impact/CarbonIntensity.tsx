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

function CarbonIntensity() {
  const data = [
    { name: "Coal", value: 910 },
    { name: "Oil", value: 710 },
    { name: "Natural Gas", value: 490 },
    { name: "WtE (Gasification)", value: 250 },
    { name: "WtE (Anaerobic)", value: 180 },
    { name: "Solar PV", value: 45 },
    { name: "Wind", value: 12 },
    { name: "Hydro", value: 24 },
  ];

  return (
    <CardWrapper>
      <h1 className="font-medium text-lg">Carbon Intensity</h1>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis
            label={{ value: "gCO₂e/kWh", angle: -90, position: "insideLeft" }}
          />
          <Tooltip formatter={(value) => `${value} gCO₂e/kWh`} />
          <Bar
            dataKey="value"
            fill="hsl(var(--primary))"
            name="Carbon Intensity"
          />
        </BarChart>
      </ResponsiveContainer>
    </CardWrapper>
  );
}

export default CarbonIntensity;
