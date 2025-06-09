"use client";
import React from "react";
import CardWrapper from "../ui/CardWrapper";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

function TechnologyComparisonCard() {
  const technology = [
    {
      name: "Gasification",
      economicScore: 7.5,
      environmentalScore: 8.2,
      socialScore: 6.8,
      technicalScore: 7.8,
      regulatoryScore: 7.0,
    },
    {
      name: "Anaerobic Digestion",
      economicScore: 7.2,
      environmentalScore: 8.8,
      socialScore: 8.5,
      technicalScore: 7.0,
      regulatoryScore: 8.5,
    },
    {
      name: "Direct Combustion",
      economicScore: 8.0,
      environmentalScore: 6.0,
      socialScore: 5.5,
      technicalScore: 8.5,
      regulatoryScore: 6.0,
    },
  ];

  const getRadarData = (technology: any) => {
    return [
      { subject: "Economic", A: technology.economicScore, fullMark: 10 },
      {
        subject: "Environmental",
        A: technology.environmentalScore,
        fullMark: 10,
      },
      { subject: "Social", A: technology.socialScore, fullMark: 10 },
      { subject: "Technical", A: technology.technicalScore, fullMark: 10 },
      { subject: "Regulatory", A: technology.regulatoryScore, fullMark: 10 },
    ];
  };

  return (
    <div className="flex flex-row gap-4 w-full">
      {technology.map((tech) => (
        <CardWrapper key={tech.name}>
          <h1 className="font-medium text-lg">{tech.name}</h1>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              cx="50%"
              cy="50%"
              outerRadius="80%"
              data={getRadarData(tech)}
            >
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={90} domain={[0, 10]} />
              <Radar
                name={tech.name}
                dataKey="A"
                stroke="hsl(var(--primary))"
                fill="hsl(var(--primary))"
                fillOpacity={0.5}
              />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </CardWrapper>
      ))}
    </div>
  );
}

export default TechnologyComparisonCard;
