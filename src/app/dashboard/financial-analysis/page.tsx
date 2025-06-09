import CashFlowAnalysis from "@/app/screens/financial-analysis/CashFlowAnalysis";
import ROICalculator from "@/app/screens/financial-analysis/ROICalculator";
import TechnologyComparison from "@/app/screens/financial-analysis/TechnologyComparison";
import PageHeader from "@/components/ui/PageHeader";
import Tab from "@/components/ui/Tab";
import React from "react";

async function FinancialAnalysis(props: {
  searchParams?: Promise<{
    tab?: string;
  }>;
}) {
  const header = {
    title: "Financial Analysis",
    subtitle:
      "Calculate ROI and economic viability of waste-to-energy projects",
  };

  const params = await props.searchParams;
  const { tab } = params as any;

  const tabs = [
    {
      name: "ROI Calculator",
      tab: "roi-calculator",
      page: <ROICalculator />,
    },
    {
      name: "Cash Flow Analysis",
      tab: "cash-flow-analysis",
      page: <CashFlowAnalysis />,
    },
    {
      name: "Technology Comparison",
      tab: "technology-comparison",
      page: <TechnologyComparison />,
    },
  ];

  return (
    <div className="w-full h-full flex flex-col gap-4">
      <PageHeader title={header.title} subtitle={header.subtitle} />
      <div className="w-full h-full flex flex-col gap-4">
        <Tab tabs={tabs} active={tabs[0].tab} />
        {tabs[tab ? tabs.findIndex((t) => t.tab === tab) : 0].page}
      </div>
    </div>
  );
}

export default FinancialAnalysis;
