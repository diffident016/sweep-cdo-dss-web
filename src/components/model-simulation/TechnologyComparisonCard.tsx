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

function TechnologyComparisonCard() {
  const data = [
    {
      name: "Gasification",
      energy: 800,
      carbon: 600,
      cost: 400,
    },
    {
      name: "Anaerobic",
      energy: 500,
      carbon: 700,
      cost: 300,
    },
    {
      name: "Incineration",
      energy: 650,
      carbon: 450,
      cost: 350,
    },
  ];

  return (
    <CardWrapper>
      <h1 className="font-medium text-lg">Technology Comparison</h1>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="energy"
            name="Energy Output (kWh/ton)"
            fill="hsl(var(--primary))"
          />
          <Bar
            dataKey="carbon"
            name="Carbon Reduction (kg/ton)"
            fill="hsl(var(--accent))"
          />
          <Bar dataKey="cost" name="Cost ($/ton)" fill="hsl(var(--muted))" />
        </BarChart>
      </ResponsiveContainer>
    </CardWrapper>
  );
}

export default TechnologyComparisonCard;
