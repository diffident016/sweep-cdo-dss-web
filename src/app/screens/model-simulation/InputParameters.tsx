"use client";
import Button from "@/components/ui/Button";
import CardWrapper from "@/components/ui/CardWrapper";
import ParameterSlider from "@/components/ui/Slider";
import React, { useState } from "react";

function InputParameters() {
  const [wasteVolume, setWasteVolume] = useState(43);
  const [organicContent, setOrganicContent] = useState(30);
  const [recyclableContent, setRecyclableContent] = useState(20);
  const [processingEfficiency, setProcessingEfficiency] = useState(70);
  const [selectedTechnology, setSelectedTechnology] = useState("Gasification");

  const items = ["Gasification", "Anaerobic Digestion", "Thermal Combustion"];

  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-row gap-4">
        <CardWrapper>
          <h1 className="font-medium text-lg">Waste Characteristics</h1>
          <div className="flex flex-col gap-4 mt-4">
            <div className="flex flex-col py-2">
              <div className="flex flex-row gap-4 items-center justify-between">
                <h1 className="font-medium text-base">
                  Annual Waste Volume (tons)
                </h1>
                <p className="font-medium">{wasteVolume * 1000}</p>
              </div>
              <ParameterSlider
                value={wasteVolume}
                onChange={(e, value) => setWasteVolume(value as number)}
              />
            </div>
            <div className="flex flex-col py-2">
              <div className="flex flex-row gap-4 items-center justify-between">
                <h1 className="font-medium text-base">Organic Content (%)</h1>
                <p className="font-medium">{organicContent}%</p>
              </div>
              <ParameterSlider
                value={organicContent}
                onChange={(e, value) => setOrganicContent(value as number)}
              />
            </div>
            <div className="flex flex-col py-2">
              <div className="flex flex-row gap-4 items-center justify-between">
                <h1 className="font-medium text-base">
                  Recyclable Content (%)
                </h1>
                <p className="font-medium">{recyclableContent}%</p>
              </div>
              <ParameterSlider
                value={recyclableContent}
                onChange={(e, value) => setRecyclableContent(value as number)}
              />
            </div>
          </div>
        </CardWrapper>
        <CardWrapper>
          <h1 className="font-medium text-lg">Technology Parameters</h1>
          <div className="flex flex-col justify-between w-full h-full pb-10">
            <div className="flex flex-row items-center font-medium w-full h-12 border border-gray-200 rounded-md bg-gray-50 overflow-hidden">
              {items.map((item) => (
                <div
                  key={item}
                  onClick={() => setSelectedTechnology(item)}
                  className={`cursor-pointer w-full h-full flex items-center justify-center text-center border-r border-r-gray-200 transition duration-300 ${
                    selectedTechnology === item
                      ? "bg-gray-900 text-background"
                      : "text-foreground hover:bg-gray-100"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="flex flex-col py-4">
              <div className="flex flex-row gap-4 items-center justify-between">
                <h1 className="font-medium text-base">
                  Processing Efficiency (%)
                </h1>
                <p className="font-medium">{processingEfficiency}%</p>
              </div>
              <ParameterSlider
                value={processingEfficiency}
                onChange={(e, value) =>
                  setProcessingEfficiency(value as number)
                }
              />
            </div>
            <Button color="gray-900" text="Run Simulation" />
          </div>
        </CardWrapper>
      </div>
    </div>
  );
}

export default InputParameters;
