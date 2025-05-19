import ProjectedEnergyGeneration from "@/components/waste-analysis/ProjectedEnergyGeneration";
import WtEPotentialAnalysis from "@/components/waste-analysis/WtEPotentialAnalysis";
import React from "react";

function EnergyPotential() {
  return (
    <div className="flex flex-col py-4 w-full h-full gap-4 mb-4">
      <div className="w-full max-h-[450px]">
        <WtEPotentialAnalysis />
      </div>
      <ProjectedEnergyGeneration />
    </div>
  );
}

export default EnergyPotential;
