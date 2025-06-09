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

function ResourceRecoveryCard() {
  const data = [
    {
      name: "Current System",
      energy: 0,
      metals: 25,
      organics: 10,
      residual: 65,
    },
    { name: "Gasification", energy: 35, metals: 35, organics: 0, residual: 30 },
    {
      name: "Anaerobic Digestion",
      energy: 25,
      metals: 30,
      organics: 40,
      residual: 5,
    },
    { name: "Incineration", energy: 40, metals: 30, organics: 0, residual: 30 },
  ];

  return (
    <CardWrapper>
      <h1 className="font-medium text-lg">Resource Recovery</h1>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value) => `${value}%`} />
          <Legend />
          <Bar
            dataKey="energy"
            name="Energy Recovery (%)"
            stackId="a"
            fill="hsl(var(--primary))"
          />
          <Bar
            dataKey="metals"
            name="Metals Recovery (%)"
            stackId="a"
            fill="hsl(var(--accent))"
          />
          <Bar
            dataKey="organics"
            name="Organics Recovery (%)"
            stackId="a"
            fill="hsl(187 31% 62%)"
          />
          <Bar
            dataKey="residual"
            name="Residual to Landfill (%)"
            stackId="a"
            fill="hsl(var(--muted))"
          />
        </BarChart>
      </ResponsiveContainer>
    </CardWrapper>
  );
}

export default ResourceRecoveryCard;
