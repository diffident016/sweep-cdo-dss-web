"use client";
import React, { useState } from "react";
import CardWrapper from "../ui/CardWrapper";
import ParameterSlider from "../ui/Slider";
import Button from "../ui/Button";

function CriteriaWeightingCard() {
  const [economicWeight, setEconomicWeight] = useState(40);
  const [socialWeight, setSocialWeight] = useState(30);
  const [environmentalWeight, setEnvironmentalWeight] = useState(30);
  const [technicalWeight, setTechnicalWeight] = useState(20);
  const [regulatoryWeight, setRegulatoryWeight] = useState(10);

  return (
    <div className="w-full h-fit">
      <CardWrapper>
        <h1 className="font-medium text-lg">Set Criteria Importance</h1>
        <div className="flex flex-col gap-4">
          <p className="font-light text-base">
            Adjust the weights of each criterion based on your priorities. Total
            weights must equal 100%.
          </p>
          <div className="flex flex-col mt-2">
            <div className="flex flex-row gap-4 items-center justify-between">
              <h1 className="font-medium text-base">
                Economic Criteria (Capital cost, ROI, O&M costs)
              </h1>
              <p className="font-medium">{economicWeight}%</p>
            </div>
            <ParameterSlider
              value={economicWeight}
              onChange={(e, value) => setEconomicWeight(value as number)}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row gap-4 items-center justify-between">
              <h1 className="font-medium text-base">
                Environmental Criteria (Emissions, resource recovery)
              </h1>
              <p className="font-medium">{environmentalWeight}%</p>
            </div>
            <ParameterSlider
              value={environmentalWeight}
              onChange={(e, value) => setEnvironmentalWeight(value as number)}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row gap-4 items-center justify-between">
              <h1 className="font-medium text-base">
                Social Criteria (Public acceptance, job creation)
              </h1>
              <p className="font-medium">{socialWeight}%</p>
            </div>
            <ParameterSlider
              value={socialWeight}
              onChange={(e, value) => setSocialWeight(value as number)}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row gap-4 items-center justify-between">
              <h1 className="font-medium text-base">
                Technical Criteria (Reliability, efficiency, maturity)
              </h1>
              <p className="font-medium">{technicalWeight}%</p>
            </div>
            <ParameterSlider
              value={technicalWeight}
              onChange={(e, value) => setTechnicalWeight(value as number)}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row gap-4 items-center justify-between">
              <h1 className="font-medium text-base">
                Regulatory Criteria (Compliance, permitting)
              </h1>
              <p className="font-medium">{regulatoryWeight}%</p>
            </div>
            <ParameterSlider
              value={regulatoryWeight}
              onChange={(e, value) => setRegulatoryWeight(value as number)}
            />
          </div>
          <Button color="primary" text="Update Analysis" />
        </div>
      </CardWrapper>
    </div>
  );
}

export default CriteriaWeightingCard;
