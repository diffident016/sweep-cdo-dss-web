import FinancialAnalysisCard from "@/components/model-simulation/FinancialAnalysisCard";
import SimulationResultsCard from "@/components/model-simulation/SimulationResultsCard";
import React from "react";

function SimulationResults() {
  return (
    <div className="w-full flex flex-row gap-4">
      <SimulationResultsCard />
      <FinancialAnalysisCard />
    </div>
  );
}

export default SimulationResults;
