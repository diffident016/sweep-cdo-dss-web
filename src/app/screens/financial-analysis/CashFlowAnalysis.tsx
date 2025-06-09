import CashflowProjection from "@/components/financial-analysis/CashflowProjection";
import SensitivityAnalysis from "@/components/financial-analysis/SensitivityAnalysis";
import React from "react";

function CashFlowAnalysis() {
  return (
    <div className="w-full flex flex-col gap-4 pb-4">
      <CashflowProjection />
      {/* <SensitivityAnalysis /> */}
    </div>
  );
}

export default CashFlowAnalysis;
