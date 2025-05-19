import AnnualGenerationTrend from "@/components/waste-analysis/AnnualGenerationTrend";
import WasteGenerationAnalysisByDistrict from "@/components/waste-analysis/WasteGenerationAnalysisByDistrict";
import React from "react";

function GenerationTrends() {
  return (
    <div className="flex flex-col py-4 w-full h-full gap-4 mb-4">
      <AnnualGenerationTrend />
      <WasteGenerationAnalysisByDistrict />
    </div>
  );
}

export default GenerationTrends;
