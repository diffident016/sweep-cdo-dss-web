import CarbonIntensity from "@/components/environment-impact/CarbonIntensity";
import React from "react";

function CarbonFootprint() {
  return (
    <div className="w-full flex flex-col">
      <CarbonIntensity />
    </div>
  );
}

export default CarbonFootprint;
