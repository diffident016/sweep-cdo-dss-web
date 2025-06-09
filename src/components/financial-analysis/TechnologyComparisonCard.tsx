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
      capex: 30,
      opex: 25,
      revenue: 40,
      payback: 6.2,
    },
    {
      name: "Anaerobic",
      capex: 18,
      opex: 18,
      revenue: 25,
      payback: 5.1,
    },
    {
      name: "Incineration",
      capex: 25,
      opex: 28,
      revenue: 35,
      payback: 7.5,
    },
    {
      name: "Pyrolysis",
      capex: 28,
      opex: 24,
      revenue: 38,
      payback: 6.8,
    },
  ];

  return (
    <CardWrapper>
      <h1 className="font-medium text-lg">Economic Comparison by Technology</h1>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="capex"
            name="Capital Cost (Million $/100tpd)"
            fill="hsl(var(--muted))"
          />
          <Bar
            dataKey="opex"
            name="Annual O&M ($/ton)"
            fill="hsl(var(--destructive))"
          />
          <Bar
            dataKey="revenue"
            name="Revenue ($/ton)"
            fill="hsl(var(--primary))"
          />
        </BarChart>
      </ResponsiveContainer>
    </CardWrapper>
  );
}

export default TechnologyComparisonCard;
