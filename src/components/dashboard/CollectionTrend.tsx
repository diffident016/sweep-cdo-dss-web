"use client";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import CardWrapper from "../ui/CardWrapper";

function CollectionTrend() {
  const wasteData = [
    { month: "Jan", waste: 15000 },
    { month: "Feb", waste: 18000 },
    { month: "Mar", waste: 16000 },
    { month: "Apr", waste: 21000 },
    { month: "May", waste: 19000 },
    { month: "Jun", waste: 22000 },
  ];

  return (
    <CardWrapper>
      <h1 className="font-medium text-lg">Waste Collection Trend</h1>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={wasteData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
          className="text-sm"
        >
          <CartesianGrid strokeWidth={0} />
          <XAxis dataKey="month" />
          <YAxis unit={"t"} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="waste"
            stroke="#212121"
            fill="#EDEDED"
            unit={"t"}
          />
        </AreaChart>
      </ResponsiveContainer>
    </CardWrapper>
  );
}

export default CollectionTrend;
