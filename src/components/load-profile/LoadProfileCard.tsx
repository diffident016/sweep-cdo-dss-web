"use client";
import React from "react";
import CardWrapper from "../ui/CardWrapper";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { LuFilter, LuListFilter, LuZap } from "react-icons/lu";

function LoadProfileCard() {
  return (
    <CardWrapper>
      <div className="w-full h-full flex flex-row">
        <div className="w-[80%] h-full flex flex-col gap-4">
          <div className="w-[200px] font-medium border gap-1 border-gray-300 rounded-lg flex items-center px-2 py-1">
            <LuZap className="w-5 h-5" />
            <select className="w-full h-8 outline-none bg-transparent">
              {["CEPALCO", "MORESCO 2"].map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>
          <div className="w-full h-full border-r border-gray-300">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                width={500}
                height={400}
                data={[
                  { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
                  { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
                  { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
                  { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
                  { name: "May", uv: 1890, pv: 4800, amt: 2181 },
                  { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
                  { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
                  { name: "Aug", uv: 2000, pv: 2400, amt: 2400 },
                  { name: "Sep", uv: 2780, pv: 3908, amt: 2000 },
                  { name: "Oct", uv: 1890, pv: 4800, amt: 2181 },
                  { name: "Nov", uv: 2390, pv: 3800, amt: 2500 },
                  { name: "Dec", uv: 3490, pv: 4300, amt: 2100 },
                ]}
                margin={{
                  top: 10,
                  right: 50,
                  left: 10,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="uv"
                  stackId="1"
                  stroke="#8884d8"
                  fill="#8884d8"
                />
                <Area
                  type="monotone"
                  dataKey="pv"
                  stackId="1"
                  stroke="#82ca9d"
                  fill="#82ca9d"
                />
                <Area
                  type="monotone"
                  dataKey="amt"
                  stackId="1"
                  stroke="#ffc658"
                  fill="#ffc658"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="w-[20%] flex flex-col gap-4 p-4">
          <div className="w-full flex flex-row gap-2 items-center">
            <LuListFilter className="w-5 h-5" />
            <h1 className="text-lg font-medium">Load Profile Per Year</h1>
          </div>

          <div className="w-full flex flex-wrap gap-2">
            {[2021, 2022, 2023, 2024, 2025, 2026, 2027].map((year) => (
              <div
                key={year}
                className="w-24 h-10 border border-gray-300 rounded-lg flex flex-col justify-center items-center gap-2 hover:bg-gray-100 cursor-pointer transition duration-300"
              >
                <h1 className="text-base font-medium">{year}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CardWrapper>
  );
}

export default LoadProfileCard;
