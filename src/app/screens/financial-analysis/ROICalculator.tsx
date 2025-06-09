import FinancialReportCard from "@/components/financial-analysis/FinancialReportCard";
import ROICalculatorCard from "@/components/financial-analysis/ROICalculatorCard";
import React from "react";

function ROICalculator() {
  return (
    <div className="w-full flex flex-row gap-4">
      <ROICalculatorCard />
      <FinancialReportCard />
    </div>
  );
}

export default ROICalculator;
