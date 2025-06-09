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

function AirPollutantEmissions() {
  const data = [
    {
      name: "Gasification",
      CO2: 250,
      NOx: 0.4,
      SO2: 0.05,
      PM: 15,
      Dioxins: 0.025,
    },
    { name: "Anaerobic", CO2: 180, NOx: 0.2, SO2: 0.02, PM: 5, Dioxins: 0.005 },
    {
      name: "Incineration",
      CO2: 450,
      NOx: 0.8,
      SO2: 0.15,
      PM: 25,
      Dioxins: 0.08,
    },
  ];

  return (
    <CardWrapper>
      <h1 className="font-medium text-lg">Air Pollutant Emissions</h1>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="CO2"
            name="CO₂ (kg/ton waste)"
            fill="hsl(var(--primary))"
          />
          <Bar
            dataKey="NOx"
            name="NOₓ (kg/ton waste)"
            fill="hsl(var(--accent))"
          />
          <Bar
            dataKey="SO2"
            name="SO₂ (kg/ton waste)"
            fill="hsl(var(--muted))"
          />
          <Bar
            dataKey="PM"
            name="Particulates (g/ton waste)"
            fill="hsl(var(--destructive))"
          />
        </BarChart>
      </ResponsiveContainer>
    </CardWrapper>
  );
}

export default AirPollutantEmissions;
