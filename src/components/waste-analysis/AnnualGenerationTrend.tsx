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

function AnnualGenerationTrend() {
  const wasteGenerationData = [
    { name: "2018", value: 182000 },
    { name: "2019", value: 189000 },
    { name: "2020", value: 175000 },
    { name: "2021", value: 195000 },
    { name: "2022", value: 203000 },
    { name: "2023", value: 211000 },
    { name: "2024 (est.)", value: 218000 },
  ];

  return (
    <CardWrapper>
      <h1 className="font-medium text-lg">Annual Waste Generation Trend</h1>
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
          data={wasteGenerationData}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, "dataMax + 50000"]} />
          <Tooltip formatter={(value) => `${value.toLocaleString()} tons`} />
          <Bar
            dataKey="value"
            fill="hsl(var(--foreground-secondary))"
            name="Total Waste"
          />
        </BarChart>
      </ResponsiveContainer>
    </CardWrapper>
  );
}

export default AnnualGenerationTrend;
