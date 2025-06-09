"use client";
import React from "react";
import CardWrapper from "../ui/CardWrapper";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function CashflowProjection() {
  const data = [
    { year: 2024, cashFlow: 50000, cumulativeCashFlow: 50000 },
    { year: 2025, cashFlow: 75000, cumulativeCashFlow: 125000 },
    { year: 2026, cashFlow: 90000, cumulativeCashFlow: 215000 },
    { year: 2027, cashFlow: 110000, cumulativeCashFlow: 325000 },
    { year: 2028, cashFlow: 130000, cumulativeCashFlow: 455000 },
    { year: 2029, cashFlow: 150000, cumulativeCashFlow: 605000 },
    { year: 2030, cashFlow: 170000, cumulativeCashFlow: 775000 },
  ];

  return (
    <CardWrapper>
      <h1 className="font-medium text-lg">Cash Flow Projection</h1>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          margin={{
            top: 10,
            right: 20,
            left: 20,
            bottom: 0,
          }}
          data={data}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="year"
            label={{
              value: "Year",
              position: "insideBottomRight",
              offset: -10,
            }}
          />
          <YAxis />
          <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
          <Legend />
          <Line
            type="monotone"
            dataKey="cumulativeCashFlow"
            name="Cumulative Cash Flow"
            // stroke="#111827"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="cashFlow"
            name="Annual Cash Flow"
            stroke="#111827"
            strokeWidth={2}
            dot={{ r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </CardWrapper>
  );
}

export default CashflowProjection;
