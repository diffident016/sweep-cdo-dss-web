import React from "react";
import CardWrapper from "../ui/CardWrapper";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

function WasteComposition() {
  const wasteCompositionData = [
    { name: "Organic", value: 45, color: "var(--foreground-secondary)" },
    {
      name: "Recyclables",
      value: 30,
      color: "var(--foreground-secondary)",
    },
    {
      name: "Inert Waste",
      value: 15,
      color: "var(--foreground-secondary)",
    },
    { name: "Hazardous", value: 5, color: "var(--foreground-secondary)" },
    { name: "Others", value: 5, color: "var(--foreground-secondary)" },
  ];

  return (
    <CardWrapper>
      <h1 className="font-medium text-lg">Waste Composition</h1>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={500} height={450}>
          <Pie
            data={wasteCompositionData}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={2}
            dataKey="value"
            label={({ name, percent }) =>
              `${name}: ${(percent * 100).toFixed(0)}%`
            }
          >
            {wasteCompositionData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `${value}%`} />
        </PieChart>
      </ResponsiveContainer>
    </CardWrapper>
  );
}

export default WasteComposition;
