import AirPollutantEmissions from "@/components/environment-impact/AirPollutantEmissions";
import EmissionComplianceAnalysis from "@/components/environment-impact/EmissionComplianceAnalysis";
import React from "react";

function AirEmissions() {
  return (
    <div className="w-full flex flex-col gap-4 pb-4">
      <AirPollutantEmissions />
      <EmissionComplianceAnalysis />
    </div>
  );
}

export default AirEmissions;
