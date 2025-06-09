import CriteriaWeighting from "@/app/screens/multi-criteria-analysis/CriteriaWeighting";
import ResultsRecommendations from "@/app/screens/multi-criteria-analysis/ResultsRecommendations";
import TechnologyComparison from "@/app/screens/multi-criteria-analysis/TechnologyComparison";
import PageHeader from "@/components/ui/PageHeader";
import TabScreen from "@/components/ui/TabScreen";
import React from "react";

async function MultiCriteriaAnalysis() {
  const header = {
    title: "Multi-Criteria Decision Analysis",
    subtitle:
      "Evaluate waste-to-energy technologies across multiple criteria to find the optimal solution",
  };

  const tabs = [
    {
      name: "Criteria Weighting",
      tab: "criteria-weighting",
      page: <CriteriaWeighting />,
    },
    {
      name: "Technology Comparison",
      tab: "technology-comparison",
      page: <TechnologyComparison />,
    },
    {
      name: "Results & Recommendations",
      tab: "results-recommendations",
      page: <ResultsRecommendations />,
    },
  ];

  return (
    <div className="w-full h-full flex flex-col gap-4">
      <PageHeader title={header.title} subtitle={header.subtitle} />
      <TabScreen tabs={tabs} />
    </div>
  );
}

export default MultiCriteriaAnalysis;
