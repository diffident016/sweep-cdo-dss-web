"use client";
import React from "react";
import CardWrapper from "../ui/CardWrapper";
import Input from "../ui/Input";
import Button from "../ui/Button";

function ROICalculatorCard() {
  return (
    <CardWrapper>
      <h1 className="font-medium text-lg">Parameters</h1>
      <div className="flex flex-col w-full">
        <p className="font-medium py-2">Technology Type</p>
        <select className="border border-gray-300 rounded-md p-2 h-11">
          <option value="gasification">Gasification</option>
          <option value="anaerobic-digestion">Anaerobic Digestion</option>
          <option value="thermal-combustion">Thermal Combustion</option>
        </select>
        <Input label="Processing Capacity" />
        <Input label="Capital Cost" />
        <Input label="Annual Fixed Cost" />
        <Input label="Energy Price" />
        <div className="pt-6">
          <Button color="gray-900" text="Calculate Financial Metrics" />
        </div>
      </div>
    </CardWrapper>
  );
}

export default ROICalculatorCard;
