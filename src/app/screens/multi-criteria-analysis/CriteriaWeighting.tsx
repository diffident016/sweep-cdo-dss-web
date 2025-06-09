import CriteriaDescription from "@/components/multi-criteria-analysis/CriteriaDescription";
import CriteriaWeightingCard from "@/components/multi-criteria-analysis/CriteriaWeightingCard";
import React from "react";

function CriteriaWeighting() {
  return (
    <div className="w-full flex flex-col gap-4 pb-4">
      <CriteriaWeightingCard />
      <CriteriaDescription />
    </div>
  );
}

export default CriteriaWeighting;
