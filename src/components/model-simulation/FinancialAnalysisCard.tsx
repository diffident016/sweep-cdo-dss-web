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

function FinancialAnalysisCard() {
  const data = [
    { name: "Initial Investment", value: 1000000 },
    { name: "Annual Revenue", value: 200000 },
    { name: "Annual Cost", value: 150000 },
    { name: "Annual Profit", value: 50000 },
  ];

  return (
    <CardWrapper>
      <h1 className="font-medium text-lg">Financial Analysis</h1>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          margin={{
            top: 10,
            right: 10,
            left: 20,
            bottom: 0,
          }}
          data={data}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, ""]} />
          <Legend />
          <Bar
            dataKey="value"
            fill="hsl(var(--background-secondary))"
            name="Amount (USD)"
          />
        </BarChart>
      </ResponsiveContainer>
    </CardWrapper>
  );
}

export default FinancialAnalysisCard;
